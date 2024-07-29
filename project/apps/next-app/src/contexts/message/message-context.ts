import React from "react";

export enum MessageVariantEnum {
	error = "error",
	success = "success",
	info = "info",
	warning = "warning"
}

export enum MessageTitleEnum {
	error = "Erro",
	success = "Sucesso",
	info = "info",
	warning = "Atenção"
}

export type MessageContextResult = {
	AddMessage: (message: string, title?: MessageTitleEnum, variant?: MessageVariantEnum) => Promise<void>
	UnexpectedError: (error: Error) => Promise<void>
}

export const MessageContext = React.createContext<MessageContextResult>({
	AddMessage: async () => { },
	UnexpectedError: async (error: Error) => { }
})