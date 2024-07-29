"use client"
import { useContext } from "react";
import { ConfigurationsContext } from "./ConfigurationsContext";

export function withPrivateRoute(Component: React.ComponentType) {
	return (props: any) => {
		const contextValues = useContext(ConfigurationsContext);
		return <Component {...props} configs={contextValues} />
	}
}