import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useState } from 'react';
import { AuthorizationContext } from '../../../contexts/authorization/authorization-context';
import { MessageContext, MessageVariantEnum } from '../../../contexts/message/message-context';
import { GetErrorDescription } from '../../../configurations/descriptionsErrors';


type CredentialsViewModel = {
	username: string,
	password: string
}

export type SiginViewModel = {
	isRequesting: boolean
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
	const authorizationContext = useContext(AuthorizationContext)
	const messageContext = useContext(MessageContext)
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
				const data = await res.json()
				if (res.status === 200) {
					// guardar o token no localstorage
					await authorizationContext.SignIn(data)
					router.push('/');
				} else if (res.status === 400) {

					messageContext.AddMessage(GetErrorDescription(data.errorCode), MessageVariantEnum.error)
				} else {
					throw new Error("API Error")
				}

			} catch (error: any) {
				messageContext.UnexpectedError(error)
			}
		} else {
			setErrors(newErrors);
		}
		setIsRequesting(false)
	}
	return {
		isRequesting: isRequesting,
		SignIn,
		formErrors: errors,
		setFormData,
		isSubmitDisabled: isRequesting,
		formData
	}
}