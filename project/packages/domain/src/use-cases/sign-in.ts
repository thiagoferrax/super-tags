import { IHashComparer } from "../services/cryptography/IHashComparer"
import { IDecrypter, IEncrypter, IGetUserByEmailRepository } from "../services"
import { ValidationError } from ".."

export type SignInParams = {
	username: string,
	password: string
}

export type SignInResult = {
	token: string
}

export type EncryptTokenValue = {
	id: number,
	name: string,
}

export class SignIn {
	constructor(
		private readonly getUserByEmailRepository: IGetUserByEmailRepository,
		private readonly hashCompare: IHashComparer,
		private readonly encrypter: IEncrypter<EncryptTokenValue>
	) { }

	async Execute(params: SignInParams): Promise<SignInResult> {
		const user = await this.getUserByEmailRepository.GetByEmail(params.username)
		if (user) {
			const isPasswordValid = await this.hashCompare.Compare(user.passwordHash, params.password)
			if (isPasswordValid) {
				const token = await this.encrypter.Encrypt({
					id: user.id!,
					name: user.name
				})

				return {
					token
				}
			}
		}

		throw new ValidationError("SignIn", null, "INVALID_CREDENTIALS")

	}
}