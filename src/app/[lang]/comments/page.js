import LocaleSwitcher from "@/app/[lang]/components/locale-switcher";
import {getDictionary} from "@/get-dictionary";
import Nav from "@/app/[lang]/components/nav";
import MessageBoard from "@/app/[lang]/comments/components/message-board";

export default async function Home({params: {lang}}) {
    const dictionary = await getDictionary(lang)
    const i18n = dictionary?.index ?? {}

    return (
        <main className="flex min-h-screen flex-col items-center">

            <Nav t={dictionary?.nav} page={"comment"}/>
            <div className="content">
                <LocaleSwitcher/>
                <div className="card">
                    <MessageBoard />
                </div>
            </div>
        </main>
    )
}