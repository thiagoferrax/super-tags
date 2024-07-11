"use client"
import { useContext } from "react";
import { AuthorizationContext } from "./authorization-context";
import { useRouter } from 'next/navigation'



export function withPrivateRoute(Component: React.ComponentType) {
	return (props: any) => {
		const contextValues = useContext(AuthorizationContext);
		const router = useRouter()
		if (!contextValues.isAuthenticated) {
			router.push("/signin")
			return
		}
		return <Component {...props} />
	}

}