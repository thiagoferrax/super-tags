"use client"
import React, { useState } from 'react'
import { MessageContext, MessageVariantEnum, MessageTitleEnum } from './message-context';
import { XCircleIcon } from "@heroicons/react/24/outline";

export type MessageInfo = {
	id: number,
	text: string,
	variant: MessageVariantEnum,
	title: MessageTitleEnum
}

export default function MessageProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const [messages, setMessages] = useState<MessageInfo[]>([
		/* {
			id: 1,
			text: "Some message",
			variant: MessageVariantEnum.warning,
			title: MessageTitleEnum.warning
		} */
	])

	async function AddMessage(message: string, title: MessageTitleEnum = MessageTitleEnum.error, variant: MessageVariantEnum = MessageVariantEnum.error) {
		setMessages([...messages,
		{
			id: Math.random(),
			text: message,
			variant: variant,
			title: title
		}
		])
	}

	async function UnexpectedError(error: Error) {
		console.error(error)
		await AddMessage("Erro inesperado. Se o erro persistir contate o suporte.", MessageTitleEnum.error, MessageVariantEnum.error)
	}

	function DeleteMessage(id: number) {
		const messagesResult = messages.filter(m => m.id !== id)
		setMessages(messagesResult)
	}

	return (
		<MessageContext.Provider value={{
			AddMessage,
			UnexpectedError

		}}>
			<div className="relative">
				<ul role="alert" className="absolute z-10 top-2 right-2 w-80 flex flex-col gap-2">
					{messages.map((m, index) => (
						<li
							className={`flex flex-col gap-2 relative alert alert-${m.variant} border-white rounded-[5px] border-2 border-white/15 p-2 text-sm`}
							key={index}
						>
							<h3 className="font-bold text-xl">{m.title}</h3>
							<span>{m.text}</span>
							<button className="absolute top-1 right-1" onClick={() => DeleteMessage(m.id)}>
								<XCircleIcon className="size-8 inline" />
							</button>
						</li>
					))}
				</ul>

			</div>
			{children}
		</MessageContext.Provider>
	)
}
