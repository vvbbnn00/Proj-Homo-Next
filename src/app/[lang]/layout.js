import './globals.css'
import Footer from "@/app/[lang]/components/footer";
import Header from "@/app/[lang]/components/header";
import {getDictionary} from "@/get-dictionary";

export async function generateMetadata({params, searchParams}, parent) {
    const lang = params.lang
    const dictionary = await getDictionary(lang)
    return dictionary.meta
}

export default function RootLayout({children, params}) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </head>
            <body>
            <Header/>
            {children}
            <Footer/>
            </body>
        </html>
    )
}
