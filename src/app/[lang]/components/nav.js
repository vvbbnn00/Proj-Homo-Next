"use client"

import "./nav.css"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {i18n} from "@/i18n-config";

export default function Nav({t, page}) {
    const pathName = usePathname();

    return (
        <div className="navigate-bar">
            <div className="navbar-content">
                <Link className={"navigate-button" + (page === 'home' ? '-checked' : '')} href={'/' + pathName.split('/')[1] + '/'}>
                    <text>{t.main}</text>
                </Link>
                <Link className={"navigate-button" + (page === 'comment' ? '-checked' : '')} href={'/' + pathName.split('/')[1] + '/comments'}>
                    <text>{t.comment}</text>
                </Link>
            </div>
        </div>)
}