'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSignInController } from './use-sigin-controller'

export default function Page() {
	const router = useRouter()
	const { SignIn, formErrors, isSubmitDisabled, setFormData, formData } = useSignInController({ router })
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		SignIn()
	}

	return (
		<div className="h-screen bg-login-background flex flex-col justify-center items-center text-white">
			<form className="w-[450px]" onSubmit={onSubmit}>
				<h1 className="text-[2rem] font-black text-center leading-8">Entre com a sua conta</h1>
				<fieldset className="flex flex-col bg-zinc-900 rounded-[5px] border-2 border-white/[.15] p-8 mt-3.5">
					<label className="text-sm mb-1" htmlFor="username">Username</label>
					<input className="h-11 mb-1.5 bg-black rounded border-2 border-white/[.15]" id="username" name="username" type="text"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								username: e.target.value
							})
						}} />
					<span>{formErrors.username}</span>
					<label className="text-sm mb-1" htmlFor="password">Senha</label>
					<input className="h-11 mb-9 bg-black rounded border-2 border-white/[.15]" id="password" name="password" type="password"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								password: e.target.value
							})
						}}
					/>
					<span>{formErrors.password}</span>
					<input className="text-sm mb-2.5 bg-violet-700 h-11 border border-white rounded" type="submit" value="Login" disabled={isSubmitDisabled} />
					<Link className="text-sm text-center leading-9 mb-2.5 h-11 border border-white/[.15] rounded" href="/register">Deseja se registrar?</Link>
				</fieldset>
			</form>
		</div>
	)
}
