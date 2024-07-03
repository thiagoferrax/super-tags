'use client'
import React from 'react'
import Header from '../../../components/header'
import Nav from '../../../components/nav'
import Content from '../../../components/content'
import ContentHeader from '../../../components/content-header'

export default function Page() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                <Content>
                    <ContentHeader />
                </Content>
            </div>
        </div>
    )
}
