"use client"

import "./nav.css"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {i18n} from "@/i18n-config";

export default function Nav({t, page}) {
    const pathName = usePathname();
    const currentLocale = pathName?.split('/')[1] || i18n.defaultLocale;
    const homeHref = `/${currentLocale}/`;
    const commentsHref = `/${currentLocale}/comments`;

    return (
        <div className="navigate-bar">
            <div className="navbar-content">
                {page === 'home' ? (
                    <span className="navigate-button-checked">
                        <span>{t.main}</span>
                    </span>
                ) : (
                    <Link className="navigate-button" href={homeHref}>
                        <span>{t.main}</span>
                    </Link>
                )}
                {page === 'comment' ? (
                    <span className="navigate-button-checked">
                        <span>{t.comment}</span>
                    </span>
                ) : (
                    <Link className="navigate-button" href={commentsHref}>
                        <span>{t.comment}</span>
                    </Link>
                )}
            </div>
        </div>)
}
