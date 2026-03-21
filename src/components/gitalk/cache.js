const STORAGE_PREFIX = 'GT_CACHE'
const CACHE_TTL_MS = 5 * 60 * 1000
const memoryCache = new Map()

const getTokenHash = token => {
    if (!token) {
        return 'guest'
    }

    let hash = 0
    for (let index = 0; index < token.length; index += 1) {
        hash = (hash << 5) - hash + token.charCodeAt(index)
        hash |= 0
    }

    return `user:${Math.abs(hash)}`
}

const canUseSessionStorage = () => (
    typeof window !== 'undefined' &&
    typeof window.sessionStorage !== 'undefined'
)

const readSessionCache = key => {
    if (!canUseSessionStorage()) {
        return null
    }

    try {
        const rawValue = window.sessionStorage.getItem(key)
        return rawValue ? JSON.parse(rawValue) : null
    } catch (error) {
        return null
    }
}

const writeSessionCache = (key, value) => {
    if (!canUseSessionStorage()) {
        return
    }

    try {
        window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        // Ignore storage quota and serialization failures.
    }
}

export const getCacheKey = ({owner, repo, id, number, accessToken}) => {
    const issueKey = typeof number === 'number' && number > 0
        ? `number:${number}`
        : `id:${id}`

    return [
        STORAGE_PREFIX,
        owner,
        repo,
        issueKey,
        getTokenHash(accessToken)
    ].join(':')
}

export const readCache = key => {
    const cachedValue = memoryCache.get(key) ?? readSessionCache(key)

    if (cachedValue) {
        memoryCache.set(key, cachedValue)
    }

    return cachedValue ?? null
}

export const writeCache = (key, value) => {
    const payload = {
        ...value,
        cachedAt: Date.now()
    }

    memoryCache.set(key, payload)
    writeSessionCache(key, payload)

    return payload
}

export const isCacheFresh = cachedValue => (
    Boolean(cachedValue) &&
    Date.now() - cachedValue.cachedAt < CACHE_TTL_MS
)
