import React from 'react'

export default function Action({className, onClick, text}) {
    return (
        <a className={`gt-action ${className}`} onClick={onClick}>
            <span className="gt-action-text">{text}</span>
        </a>
    )
}