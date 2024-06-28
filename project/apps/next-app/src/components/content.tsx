import React from 'react'
interface contentProps {
    children: React.ReactNode;
}

export default function Content(props: contentProps) {
    return (
        <section className="grow pl-6 pt-12 pr-9 overflow-auto">{props.children}</section>
    )
}