import { IHashComparer } from "../services/cryptography/IHashComparer"
import { IGetUserByEmailRepository } from "../services"

export type SignInParams = {
    username: string,
    password: string
}

export type SignInResult = {
    token: string
}



export class SignIn {
    constructor(private readonly getUserByEmailRepository: IGetUserByEmailRepository, private readonly hashCompare: IHashComparer) { }

    async Execute(params: SignInParams): Promise<SignInResult> {
        const user = await this.getUserByEmailRepository.GetByEmail(params.username)
        if (user) {
            const isPasswordValid = await this.hashCompare.Compare(user.passwordHash, params.password)
            if (isPasswordValid) {
                return {
                    token: "some_token"

                }
            }
        }

        throw new Error("INVALID_CREDENTIALS")

    }
}