'use client'
import React from 'react'
import Header from '../../../components/header'
import Nav from '../../../components/nav'
import Content from '../../../components/content'
import ContentHeader from '../../../components/content-header'
import ContentProperties from '../../../components/content-properties'
import ContentTextEditor from "../../../components/content-text-editor"

export default function Page() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                <Content>
                    <ContentHeader />
                    <ContentProperties />
                    <ContentTextEditor />
                </Content>
            </div>
        </div>
    )
}
