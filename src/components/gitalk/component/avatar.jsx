import React from 'react'

export default function Avatar({
                                   src,
                                   className,
                                   alt,
                                   defaultSrc = '//cdn.jsdelivr.net/npm/gitalk@1/src/assets/icon/github.svg'
                               }) {
    return (
        <div className={`gt-avatar ${className}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src || defaultSrc} alt={`@${alt}`} onError={function (e) {
                e.target.src = defaultSrc
            }}/>
        </div>
    )
}
