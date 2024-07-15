"use client"
import React, { useState } from 'react'
import { MessageContext, MessageVariantEnum } from './message-context';

export type MessageInfo = {
	id: number,
	text: string,
	variant: MessageVariantEnum
}

function MessageProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const [messages, setMessages] = useState<MessageInfo[]>([
		// {
		// 	id: "1",
		// 	text: "Some message",
		// 	variant: MessageVariantEnum.error,

		// }
	])

	async function AddMessage(message: string, variant: MessageVariantEnum = MessageVariantEnum.error) {
		setMessages([...messages,
		{
			id: Math.random(),
			text: message,
			variant: variant
		}
		])
	}

	async function UnexpectedError(error: Error) {
		console.error(error)
		await AddMessage("Erro inesperado. Se o erro persistir contate o suporte.", MessageVariantEnum.error)
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
			<div className='relative'>
				<ul className='absolute top-2 right-2 w-80 flex flex-col gap-2'>
					{messages.map(m => (
						<li
							className='text-white border-white rounded-[5px] border-2 border-white/[.15] p-4 text-sm
								flex gap-2
							'
						>
							<span>{m.variant}</span>
							<span>{m.text}</span>
							<button onClick={() => DeleteMessage(m.id)}>Close</button>
						</li>
					))}
				</ul>

			</div>
			{children}
		</MessageContext.Provider>
	)
}

export default MessageProvider