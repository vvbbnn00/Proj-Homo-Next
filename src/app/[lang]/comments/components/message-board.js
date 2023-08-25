"use client"
import Gitalk from '@/components/gitalk'
import {usePathname} from "next/navigation";

export default function MessageBoard() {
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];

    return (
        <>
            <Gitalk
                options={{
                    language: currentLang
                }}
            />
        </>
    )
}