"use client"
import { useContext } from "react";
import { AuthorizationContext, AuthorizationContextResult } from "./authorization-context";

export interface withAuthorizationProps {
	auth: AuthorizationContextResult;
}


export function withAuthorization(Component: React.ComponentType<withAuthorizationProps>) {
	return (props: any) => {
		const contextValues = useContext(AuthorizationContext);
		return <Component {...props} auth={contextValues} />
	}
}