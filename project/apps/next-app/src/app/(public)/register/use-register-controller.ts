import { Email, PasswordStrong } from '@repo/domain';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useState } from 'react';
import { GetErrorDescription } from '../../../configurations/descriptionsErrors';
import { MessageContext, MessageVariantEnum } from '../../../contexts/message/message-context';
import { useConfigurations } from '../../../contexts/configurations/useConfigurations';
import { useApi } from '../../../hooks/useApi';


type UserViewModel = {
	name: string,
	email: string,
	password: string
}

export type RegisterViewModel = {
	isRequesting: boolean
	formErrors: Errors
	RegisterUser: () => Promise<void>,
	setFormData: (userViewModel: UserViewModel) => void,
	isSubmitDisabled: boolean
	formData: UserViewModel
}

type useRegisterControllerProps = {
	router: AppRouterInstance
}
type Errors = {
	[key: string]: string | undefined
}

export function useRegisterController({ router }: useRegisterControllerProps): RegisterViewModel {
	const messageContext = useContext(MessageContext)
	const { Request } = useApi()
	const [isRequesting, setIsRequesting] = useState(false);

	const [formData, setFormData] = useState<UserViewModel>({
		name: '',
		email: '',
		password: ''
	})
	const [errors, setErrors] = useState<Errors>({
		name: undefined,
		email: undefined,
		password: undefined
	})

	function HasErrors(_errors: Errors): boolean {
		return Object.keys(_errors).some(key => _errors[key])
	}


	function GetErrors(): Errors {
		const errors: Errors = {
			name: undefined,
			email: undefined,
			password: undefined
		};
		if (!formData.name) {
			errors.name = "Nome é obrigatório"
		}
		const emailErrorCode = Email.getErrorIfExists(formData.email)?.code;
		const passwordErrorCode = PasswordStrong.getErrorIfExists(formData.password)?.code;
		errors.email = emailErrorCode ? GetErrorDescription(emailErrorCode) : undefined
		errors.password = passwordErrorCode ? GetErrorDescription(passwordErrorCode) : passwordErrorCode
		return errors
	}


	async function RegisterUser(): Promise<void> {
		if (isRequesting) {
			return
		}
		setIsRequesting(true);
		const newErrors = {} //GetErrors();
		if (!HasErrors(newErrors)) {
			try {
				const res = await Request({
					url: "/api/users",
					method: "POST",
					body: formData
				})
				if (res.status === 201) {
					router.push('/signin')
					messageContext.AddMessage("Usuário registrado com sucesso.", MessageVariantEnum.success)
				} else if (res.status === 400) {
					const description = GetErrorDescription(res.data.errorCode)
					messageContext.AddMessage(description)
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
		isRequesting,
		RegisterUser,
		formErrors: errors,
		setFormData,
		isSubmitDisabled: isRequesting,
		formData
	}
}