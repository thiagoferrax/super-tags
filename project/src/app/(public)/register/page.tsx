'use client'
import React, { useState } from 'react'
import { SignIn as SignInUseCase } from '../../../core/use-cases/SignIn'
import ValidationError from '@/core/models/ValidationError'
import { useRouter } from 'next/navigation';
const SignIn = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: "",
		email: '',
		password: ''
	})
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await fetch("http://localhost:3000/api/users", {
				method: "POST",
				body: JSON.stringify(formData)
			})
			router.push('/signin');
		} catch (error) {
			console.error(error)
		}


	}


	return (
		<div>
			<form onSubmit={onSubmit}>
				<p>Register In</p>
				<label htmlFor="name">Name</label>
				<input id="name" name="name" type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({
							...formData,
							name: e.target.value
						})
					}} />
				<label htmlFor="email">Eamil</label>
				<input id="email" name="email" type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({
							...formData,
							email: e.target.value
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
				<input type='submit' value="Register" />
			</form>
		</div>
	)
}

export default SignIn