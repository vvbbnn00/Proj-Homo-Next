"use client"
import Gitalk from '@/components/gitalk'
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function MessageBoard({clientId}) {
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <>
            {render && <Gitalk
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
            />}
        </>
    )
}
