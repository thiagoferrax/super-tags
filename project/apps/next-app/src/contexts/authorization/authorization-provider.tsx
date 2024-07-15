"use client"
import React, { useEffect, useState } from 'react'
import { AuthorizationContext } from './authorization-context';

function AuthorizationProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		Initialize()
	}, [])

	function GetToken(): string | null {
		return localStorage.getItem("token")
	}

	function Initialize() {
		const token = GetToken()
		if (token) {
			// Get User Information
			setIsAuthenticated(true)
		}
		setIsLoading(false)
	}

	async function  SignIn(token: string) {
		localStorage.setItem("token", token)
		setIsAuthenticated(true)
	}

	return (
		<AuthorizationContext.Provider value={{
			isAuthenticated,
			SignIn

		}}>
			{isLoading ? <div>Loading...</div> : children}
		</AuthorizationContext.Provider>
	)
}

export default AuthorizationProvider