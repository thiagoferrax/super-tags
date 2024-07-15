import React from "react";

export type AuthorizationContextResult = {
	isAuthenticated: boolean,
	SignIn: (token: string) => Promise<void>
}


export const AuthorizationContext = React.createContext<AuthorizationContextResult>({
	isAuthenticated: false,
	SignIn: async () => { }
})