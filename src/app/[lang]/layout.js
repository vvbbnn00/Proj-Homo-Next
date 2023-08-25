import './globals.css'
import Footer from "@/app/[lang]/components/footer";
import Header from "@/app/[lang]/components/header";

export const metadata = {
    title: '这么臭的网站有访问的必要吗',
    description: '田所浩二（野兽先辈）是一位知名日本网络红人，该网站用于介绍野兽先辈的王道征途。',
}

export default function RootLayout({children, params}) {
    return (
        <html lang={params.lang}>
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
