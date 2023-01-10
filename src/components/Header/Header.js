import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 className="header">Cats</h1>
            <h1 className="header">{title}</h1>
        </>
    )
}
