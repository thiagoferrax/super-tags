'use client'
import React from 'react'
import Content from "@/ui/components/content";
import Header from "@/ui/components/header";
import Nav from "@/ui/components/nav";

export default function Profile() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
			<Header />
			<div className="flex grow bg-black overflow-auto">
				<Nav />
				<Content>Profile</Content>
			</div>
		</div>
    )
}