import Image from 'next/image'
import './main.css'
import LocaleSwitcher from "@/app/[lang]/components/locale-switcher";
import {getDictionary} from "@/get-dictionary";
import Nav from "@/app/[lang]/components/nav";


export default async function Home({params: {lang}}) {
    const dictionary = await getDictionary(lang)
    const i18n = dictionary?.index ?? {}

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Nav t={dictionary?.nav} page={"home"} />
            <div className="content">
                <div>
                    <center>
                        <div className="title">{i18n?.pv_title}</div>
                    </center>
                    <center>
                        <div className="text-small-title">{i18n?.pv_tip}</div>
                    </center>
                </div>
                <LocaleSwitcher/>
                <div className="card">
                    <div className="card_head">
                        <div className="text-small-title">{i18n?.ui_whoami}</div>
                    </div>
                    <div className="card_area flex flex-row align-middle justify-around flex-wrap">
                        <div className="flex justify-center align-center">
                            <div className="avatar">
                                <Image
                                    src="/avatar.jpg"
                                    alt={i18n?.avatar}
                                    width={200}
                                    height={200}
                                    className="logo"
                                />
                            </div>
                        </div>
                        <div className="flex sjustify-center align-center">
                            <div className="text-area">
                                <div className="title"
                                      dangerouslySetInnerHTML={{__html: i18n?.name}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.alias}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.age}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.job}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.stature}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.weight}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.hobbies}}/>
                                <div className="list-text" dangerouslySetInnerHTML={{__html: i18n?.foods}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_head">
                        <div className="text-small-title">{i18n?.ui_whats_this}</div>
                    </div>
                    <div className="class_content">
                        {/* 渲染Markdown */}
                        <div dangerouslySetInnerHTML={{__html: i18n?.intro}}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card_head">
                        <div className="text-small-title">{i18n?.ui_contact}</div>
                    </div>
                    <div className="class_content">
                        {/* 渲染Markdown */}
                        <div dangerouslySetInnerHTML={{__html: i18n?.contact}}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
