'use client'
import React, { useState } from 'react'
import { SignIn as SignInUseCase } from '../../../../core/use-cases/SignIn'
import ValidationError from '@/core/models/ValidationError'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
	const router = useRouter()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	})
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await fetch('http://localhost:3000/api/users', {
				method: 'POST',
				body: JSON.stringify(formData)
			})
			router.push('/signin')
		} catch (error) {
			console.error(error)
		}
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
					<label className="text-sm mb-1" htmlFor="email">E-mail</label>
					<input className="h-11 mb-1.5 bg-black rounded border-2 border-white/[.15]" id="email" name="email" required type="email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								email: e.target.value
							})
						}} />
					<label className="text-sm mb-1" htmlFor="password">Password</label>
					<input className="h-11 mb-9 bg-black rounded border-2 border-white/[.15]" id="password" name="password" type="password"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								password: e.target.value
							})
						}}
					/>
					<input className="text-sm mb-2.5 bg-violet-700 h-11 border border-white rounded" type="submit" value="Register" />
					<Link className="text-sm text-center leading-9 mb-2.5 h-11 border border-white/[.15] rounded" href="/signin">Já possui conta?</Link>
				</fieldset>
			</form>
		</div>
	)
}
