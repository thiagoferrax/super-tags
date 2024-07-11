"use client"
import React, { useState } from 'react'
import { AuthorizationContext } from './authorization-context';

function AuthorizationProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	return (
		<AuthorizationContext.Provider value={{
			isAuthenticated
		}}>
			{children}
		</AuthorizationContext.Provider>
	)
}

export default AuthorizationProvider