import LocaleSwitcher from "@/app/[lang]/components/locale-switcher";
import {getDictionary} from "@/get-dictionary";
import Nav from "@/app/[lang]/components/nav";
import MessageBoard from "@/app/[lang]/comments/components/message-board";

export default async function Home({params}) {
    const {lang} = await params
    const dictionary = await getDictionary(lang)
    const ghClientID = process.env.GITALK_CLIENT_ID

    return (
        <main className="flex min-h-screen flex-col items-center">

            <Nav t={dictionary?.nav} page={"comment"}/>
            <div className="content">
                <LocaleSwitcher/>
                <div className="card">
                    <div className="card_head">
                        <div className="text-small-title">{dictionary?.nav?.comment}</div>
                    </div>
                    <div className="pl-5 pr-5 pb-5">
                        <MessageBoard clientId={ghClientID} />
                    </div>
                    <div className="text-sm text-gray-500 text-center">
                        Comment system is modified from <a href="https://github.com/gitalk/gitalk">Gitalk</a>.
                    </div>
                </div>
            </div>
        </main>
    )
}
