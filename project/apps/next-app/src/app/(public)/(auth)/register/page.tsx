'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { RegisterViewModel, useRegisterController } from './useRegisterController'

export default function Page() {
	const router = useRouter()
	const { RegisterUser, formErrors, isSubmitDisabled, setFormData, isRequesting, formData } = useRegisterController({ router })

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		RegisterUser()
	}

	return (
		<div className="h-screen bg-login-background flex flex-col justify-center items-center text-white">
			<form className="w-[450px]" onSubmit={onSubmit}>
				<h1 className="text-[2rem] font-black text-center leading-8">Cadastre-se na plataforma</h1>
				<fieldset className="flex flex-col bg-zinc-900 rounded-[5px] border-2 border-white/[.15] p-8 mt-3.5">
					<label className="text-sm mb-1" htmlFor="name">Name</label>
					<input className="h-11 mb-1.5 bg-black rounded border-2 border-white/[.15]" id="name" name="name" type="text"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								name: e.target.value
							})
						}} />
					<span>{formErrors.name}</span>
					<label className="text-sm mb-1" htmlFor="email">E-mail</label>
					<input className="h-11 mb-1.5 bg-black rounded border-2 border-white/[.15]" id="email" name="email" required type="email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								email: e.target.value
							})
						}} />
					<span>{formErrors.email}</span>
					<label className="text-sm mb-1" htmlFor="password">Password</label>
					<input className="h-11 mb-9 bg-black rounded border-2 border-white/[.15]" id="password" name="password" type="password"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								password: e.target.value
							})
						}}
					/>

					<span>{formErrors.password}</span>
					<input className="text-sm mb-2.5 bg-violet-700 h-11 border border-white rounded disabled:bg-violet-400" type="submit" value="Register" disabled={isSubmitDisabled} />
					<Link className="text-sm text-center leading-9 mb-2.5 h-11 border border-white/[.15] rounded" href="/signin">Já possui conta?</Link>
				</fieldset>
			</form>
		</div>
	)
}
