'use client'
import React, { useState } from 'react'
import { SignIn as SignInUseCase } from '../../../core/use-cases/SignIn'
import ValidationError from '@/core/models/ValidationError'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignIn = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			// const signInUseCase = new SignInUseCase()
			// await signInUseCase.Execute({
			// 	username: formData.username,
			// 	password: formData.password
			// })
			const res = await fetch("http://localhost:3000/api/signin", {
				method: "POST",
				body: JSON.stringify(formData)
			})
			if(res.status === 200) {
				// guardar o token no localstorage
				router.push('/');
			}
			else {
				const data = await res.json()
				alert(data.error)
			}
		} catch (error) {
			// if (error instanceof ValidationError) {
			// 	alert((error as ValidationError).message)
			// } else {
			// 	alert("Unexpected error. Please try again or contact system administrator.")
			// 	console.log(error)
			// }
			console.error(error)
		}


	}


	return (
		<div>
			<form onSubmit={onSubmit}>
				<p>Sign In</p>
				<label htmlFor="username">Username</label>
				<input id="username" name="username" type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({
							...formData,
							username: e.target.value
						})
					}} />
				<label htmlFor="password">Password</label>
				<input id="password" name="password" type="password"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({
							...formData,
							password: e.target.value
						})
					}}
				/>
				<input type='submit' value="Log In" />
			</form>
			<Link href="/register">Register</Link>
		</div>
	)
}

export default SignIn