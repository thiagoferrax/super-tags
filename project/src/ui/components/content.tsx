import React from 'react'
interface contentProps {
    children: React.ReactNode;
}

export default function Content(props: contentProps) {
    return (
        <section className="col-span-10 pl-6 pt-12 pr-9">{props.children}</section>
    )
}