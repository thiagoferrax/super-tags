'use client'
import React from 'react'
import Content from "../../../../components/content";
import Header from "../../../../components/header";
import Nav from "../../../../components/nav";

export default function Settings() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                <Content>Settings</Content>
            </div>
        </div>
    )
}