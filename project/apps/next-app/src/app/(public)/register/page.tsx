'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useRegisterController } from './use-register-controller'
import { InformationCircleIcon } from "@heroicons/react/16/solid"

export default function Page() {
	const router = useRouter()
	const { RegisterUser, formErrors, isSubmitDisabled, setFormData, formData, isRequesting } = useRegisterController({ router })

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		RegisterUser()
	}

	return (
		<div className="h-screen bg-login-background flex flex-col justify-center items-center text-white">
			<form className="w-[450px]" onSubmit={onSubmit}>
				<h1 className="text-[2rem] font-black text-center leading-8">Cadastre-se na plataforma</h1>
				<fieldset className="flex flex-col bg-zinc-900 rounded-[5px] border-2 border-white/15 p-8 mt-3.5">
					<label className="text-sm" htmlFor="name">Username</label>
					<input
						className={`h-11 bg-black rounded border-2 border-white/15 ${formErrors.name && 'border-red-500'}`}
						id="name"
						name="name"
						required
						type="text"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								name: e.target.value
							})
						}}
					/>
					{formErrors.name && <span className="text-red-500 text-xs italic">{formErrors.name}</span>}

					<label className="text-sm mt-3" htmlFor="email">E-mail</label>
					<input
						className={`h-11 bg-black rounded border-2 border-white/15 ${formErrors.email && 'border-red-500'}`} id="email"
						name="email"
						required
						type="email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								email: e.target.value
							})
						}} />
					{formErrors.email && <span className="text-red-500 text-xs italic">{formErrors.email}</span>}

					<div className="dropdown dropdown-hover">
						<label className="text-sm mt-3 mr-1" htmlFor="password">Senha</label>
						<span tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info contents">
							<InformationCircleIcon className="size-3 text-white inline" />
						</span>
						<div
							tabIndex={0}
							className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow">
							<div tabIndex={0} className="card-body">
								<p>A senha deve conter pelo menos:</p>
								<ol>
									<li>1 letra maiúscula</li>
									<li>1 letra minúscula</li>
									<li>1 número</li>
									<li>1 caractere especial</li>
									<li>No mínimo 8 caracteres</li>
								</ol>
							</div>
						</div>
					</div>
					<input
						className={`h-11 bg-black rounded border-2 border-white/15 ${formErrors.password && 'border-red-500'}`} id="password"
						name="password"
						required
						type="password"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								...formData,
								password: e.target.value
							})
						}}
					/>

					{formErrors.password && <span className="text-red-500 text-xs italic">{formErrors.password}</span>}
					{
						isRequesting
							? <span className="loading loading-spinner text-primary self-center mb-2.5"></span>
							: <input
								className="text-sm mt-9 mb-2.5 bg-violet-700 h-11 border border-white rounded disabled:bg-violet-400"
								type="submit" value="Register"
								disabled={isSubmitDisabled}
							/>
					}
					<Link
						className="text-sm text-center leading-9 mb-2.5 h-11 border border-white/15 rounded"
						href="/signin"
					>Já possui conta?</Link>
				</fieldset>
			</form>
		</div>
	)
}
