import { IAddUserRepository } from "@/backend/db/user-repository"
import { ValidationError } from "../errors/validationError"
import { User } from "../models/user"
import { IHasher } from "../protocols/IHasher"
import { PasswordStrong } from "../models/password-strong"

export type CreateUserParams = {
    name: string,
    email: string,
    password: string
}



export class CreateUser {
    constructor(private readonly addUserRepository: IAddUserRepository, private readonly hasher: IHasher) { }

    async Execute(params: CreateUserParams): Promise<void> {

        new PasswordStrong(params.password)
        const hashedPassword = await this.hasher.Hash(params.password)
        const newUser = new User(null, params.name, params.email, hashedPassword);

        await this.addUserRepository.Add(newUser)
    }
}