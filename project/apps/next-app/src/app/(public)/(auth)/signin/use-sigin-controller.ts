import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useState } from 'react';


type CredentialsViewModel = {
	username: string,
	password: string
}

export type SiginViewModel = {
	formErrors: Errors
	SignIn: () => Promise<void>,
	setFormData: (userViewModel: CredentialsViewModel) => void,
	isSubmitDisabled: boolean
	formData: CredentialsViewModel
}

type useSignInControllerProps = {
	router: AppRouterInstance
}
type Errors = {
	[key: string]: string | undefined
}

export function useSignInController({ router }: useSignInControllerProps): SiginViewModel {
	const [isRequesting, setIsRequesting] = useState(false);
	const [formData, setFormData] = useState<CredentialsViewModel>({
		username: '',
		password: ''
	})
	const [errors, setErrors] = useState<Errors>({
		username: undefined,
		password: undefined
	})

	function HasErrors(_errors: Errors): boolean {
		return Object.keys(_errors).some(key => _errors[key])
	}

	function GetErrors(): Errors {
		const errors: Errors = {
			username: undefined,
			password: undefined
		};
		if (!formData.username) {
			errors.username = "Username é obrigatório"
		}
		if (!formData.password) {
			errors.password = "Password é obrigatória"
		}
		return errors
	}


	async function SignIn(): Promise<void> {
		if (isRequesting) {
			return
		}
		setIsRequesting(true);
		const newErrors = GetErrors();
		if (!HasErrors(newErrors)) {
			try {
				const res = await fetch('http://localhost:3000/api/signin', {
					method: 'POST',
					body: JSON.stringify(formData)
				})
				if (res.status === 200) {
					// guardar o token no localstorage
					router.push('/');
				}
				else {
					const data = await res.json()
					alert(data.error)
				}

			} catch (error: any) {
				alert(error.message)
			}
		} else {
			setErrors(newErrors);
		}
		setIsRequesting(false)
	}
	return {
		SignIn,
		formErrors: errors,
		setFormData,
		isSubmitDisabled: isRequesting,
		formData
	}
}