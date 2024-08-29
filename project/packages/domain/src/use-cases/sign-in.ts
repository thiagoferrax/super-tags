import { IHashComparer } from "../services/cryptography/IHashComparer"
import { IDecrypter, IEncrypter, IGetUserByEmailRepository } from "../services"
import { IUseCase, UserTokenInformation, ValidationError } from ".."

export type SignInParams = {
    username: string,
    password: string
}

export type SignInResult = {
    token: string
}

export class SignIn implements IUseCase<SignInParams, SignInResult> {
    constructor(
        private readonly getUserByEmailRepository: IGetUserByEmailRepository,
        private readonly hashCompare: IHashComparer,
        private readonly encrypter: IEncrypter<UserTokenInformation>
    ) { }

    async Execute(params: SignInParams): Promise<SignInResult> {
        const user = await this.getUserByEmailRepository.GetByEmail(params.username)
        if (user) {
			console.log(user.passwordHash, params.password)
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