import {NextResponse} from 'next/server'
import {match} from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {i18n} from './i18n-config'

const LOCALES = i18n.locales;
const DEFAULT_LOCALE = i18n.defaultLocale;

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
    let languages = new Negotiator({
        headers: {
            'accept-language': request.headers.get('Accept-Language')
        }
    }).languages();

    const defaultLocale = DEFAULT_LOCALE

    let language;
    try {
        language = match(languages, LOCALES, defaultLocale);
    } catch (e) {
        language = defaultLocale
    }

    return languages.length ? language : defaultLocale
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = LOCALES.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const normalizedPathname = pathname === '/' ? '' : pathname
        return NextResponse.redirect(
            new URL(`/${locale}${normalizedPathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
    ],
}
