import React from "react";

export type AuthorizationContextResult = {
	isAuthenticated: boolean,
	SignIn: (token: string) => Promise<void>
	Logout: () => Promise<void>
}


export const AuthorizationContext = React.createContext<AuthorizationContextResult>({
	isAuthenticated: false,
	SignIn: async () => { },
	Logout: async () => { }
})