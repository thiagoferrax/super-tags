"use client"
import { useContext } from "react";
import { MessageContext, MessageContextResult } from "./message-context";

export interface withAuthorizationProps {
	message: MessageContextResult;
}


export function withMessage(Component: React.ComponentType<withAuthorizationProps>) {
	return (props: any) => {
		const contextValues = useContext(MessageContext);
		return <Component {...props} message={contextValues} />
	}
}