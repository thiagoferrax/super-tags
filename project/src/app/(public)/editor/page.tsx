'use client'
import React from 'react'
import Header from '@/ui/components/header'
import Nav from '@/ui/components/nav'
import Content from '@/ui/components/content'

export default function Page() {

	return (
		<div className="h-screen grid grid-cols-12 grid-rows-[auto_1fr]">
			<Header />
			<Nav />
			<Content>Editor</Content>
		</div>
	)
}
