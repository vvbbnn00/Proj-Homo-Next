import React from 'react'
import Image from 'next/image';

export default function SVG({className, text, name}) {
    return (
        <span className={`gt-ico ${className}`}>
            <span className="flex flex-row align-middle items-center">
                <Image
                    className="gt-svg"
                    priority
                    src={require('../assets/icon/' + name + '.svg')}
                    alt="Follow us on Twitter"
                />
                {
                    text && <span className="gt-ico-text">{text}</span>
                }
            </span>
  </span>)
}
