'use client'
import React from 'react'
import Header from '@/ui/components/header'
import Nav from '@/ui/components/nav'
import Content from '@/ui/components/content'

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
