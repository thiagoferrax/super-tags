import { IHashComparer } from "../protocols/IHashComparer"
import { IGetUserByEmailRepository } from "../db/User/get-by-email-user-repository"

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
        console.log("Micael")
        const user = await this.getUserByEmailRepository.GetByEmail(params.username)
        console.log(user)
        if (user) {
            const isPasswordValid = await this.hashCompare.Compare(user.passwordHash, params.password)
            console.log(isPasswordValid)
            if (isPasswordValid) {
                return {
                    token: "some_token"

                }
            }
        }

        throw new Error("INVALID_CREDENTIALS")

    }
}