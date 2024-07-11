import React from "react";

export type AuthorizationContextResult = {
	isAuthenticated: boolean
}


export const AuthorizationContext = React.createContext<AuthorizationContextResult>({
	isAuthenticated: false
})