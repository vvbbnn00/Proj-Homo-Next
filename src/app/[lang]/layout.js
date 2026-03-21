import './globals.css'
import {getDictionary} from "@/get-dictionary";

export async function generateMetadata({params}) {
    const {lang} = await params
    const dictionary = await getDictionary(lang)
    return dictionary.meta
}

export default function RootLayout({children}) {
    return children
}
