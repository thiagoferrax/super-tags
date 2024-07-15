"use client"
import { useContext } from "react";
import { AuthorizationContext } from "./authorization-context";
import { redirect } from 'next/navigation'



export function withPrivateRoute(Component: React.ComponentType) {
	return (props: any) => {
		const contextValues = useContext(AuthorizationContext);
		if (!contextValues.isAuthenticated) {
			return redirect("/signin")
		}
		return <Component {...props} />
	}

}