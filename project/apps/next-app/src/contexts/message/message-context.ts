import React from "react";

export enum MessageVariantEnum {
	error = "error",
	success = "success",
	info = "info",
	warning = "warning",
}

export type MessageContextResult = {
	AddMessage: (message: string, variant?: MessageVariantEnum) => Promise<void>
	UnexpectedError: (error: Error) => Promise<void>
}

export const MessageContext = React.createContext<MessageContextResult>({
	AddMessage: async () => { },
	UnexpectedError: async (error: Error) => { }
})