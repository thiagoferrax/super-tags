'use client'
import React from 'react'
import Header from '../../../components/header'
import Nav from '../../../components/nav'
import Content from '../../../components/content'

export default function Page() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                <Content>Editor</Content>
            </div>
        </div>
    )
}
