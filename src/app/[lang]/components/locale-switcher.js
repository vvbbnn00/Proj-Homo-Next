"use client"

import {usePathname} from "next/navigation";
import "./locale-switcher.css";
import Link from 'next/link'
import {i18n} from '@/i18n-config'

export default function LocaleSwitcher() {
    const pathName = usePathname()
    const currentLocale = pathName.split('/')[1] || i18n.defaultLocale;
    const redirectedPathName = (locale) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div className="card">
            <div className="card_head">
                <span className="text-small-title">More Languages</span>
            </div>
            <div className="flex flex-row align-middle justify-around flex-wrap">
                {i18n.locales.map((locale) => {
                    return (
                        <div className="flex flex-col align-middle justify-center" key={locale}>
                            <div className={`lang-button ${locale === currentLocale ? 'current' : ''}`}>
                                {locale === currentLocale ? (
                                    <span className="text-small-title">{i18n.localeData[locale].name}</span>
                                ) : (
                                    <Link href={redirectedPathName(locale)}> {i18n.localeData[locale].name}</Link>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            {!currentLocale.startsWith("zh") && <div className="caution">
                <b>Caution: </b>Due to limitations in my language proficiency, certain Japanese and English texts have been translated using AI. Should you identify any errors, please kindly reach out to me via email. Thank you
            </div>}
        </div>
    )
}