"use client"
import Gitalk from '@/components/gitalk'
import {usePathname} from "next/navigation";

export default function MessageBoard({clientId}) {
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];

    return (
        <Gitalk
            options={{
                language: currentLang,
                repo: 'Proj-Homo-Next',
                owner: 'vvbbnn00',
                id: 'Comments',
                clientID: clientId,
                clientSecret: '',
                admin: ['vvbbnn00'],
                title: 'Message Board'
            }}
        />
    )
}
