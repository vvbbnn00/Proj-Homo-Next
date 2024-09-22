import ZHCN from './zh-CN.json'
import ZHTW from './zh-TW.json'
import EN from './en.json'
import ES from './es-ES.json'
import FR from './fr.json'
import RU from './ru.json'
import DE from './de.json'
import PL from './pl.json'
import KO from './ko.json'
import FA from './fa.json'
import JA from './ja.json'

const i18nMap = {
    'zh': ZHCN,
    'zh-CN': ZHCN,
    'zh-TW': ZHTW,
    'zh_tw': ZHTW,
    'en': EN,
    'es-ES': ES,
    'fr': FR,
    'ru': RU,
    'de': DE,
    'pl': PL,
    'ko': KO,
    'fa': FA,
    'ja': JA,
}


class I18N {
    constructor(language, langMap) {
        this.language = language
        this.langMap = langMap
    }

    t(key, params) {
        let str = this.langMap[key] || key
        if (!str) return key
        if (params) {
            for (const k in params) {
                if (k.startsWith('smart_')) {
                    if (!isNaN(Number(params[k])) && Number(params[k]) <= 1) {
                        str = str?.split('||||')[0]
                    } else {
                        str = str?.split('||||')[1]
                    }
                }
                str = str?.replaceAll(`%{${k}}`, params[k])
                str = str?.trim()
            }
        }
        return str
    }
}

export default function lang(language) {
    return new I18N(language, i18nMap[language])
}
