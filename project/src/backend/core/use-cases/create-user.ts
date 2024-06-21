import { IAddUserRepository } from "@/backend/db/user-repository"
import { ValidationError } from "../errors/validationError"
import { User } from "../models/user"

export type CreateUserParams = {
	name: string,
	email: string,
	password: string
}

const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export class CreateUser {
	constructor(private readonly addUserRepository: IAddUserRepository) {

	}
	async Execute(params: CreateUserParams): Promise<void> {
		if (!params.name) {
			throw new ValidationError("CreateUserParams", "name", "NAME_REQUIRED")
		}
		if (!params.email) {
			throw new ValidationError("CreateUserParams", "email", "EMAIL_REQUIRED")
		}

		if (!REGEX_EMAIL.test(params.email)) {
			throw new ValidationError("CreateUserParams", "email", "INVALID_EMAIL")
		}

		if (!params.password) {
			throw new ValidationError("CreateUserParams", "password", "PASSWORD_REQUIRED")
		}

		await this.addUserRepository.Add(new User(null, params.name, params.email, params.password))
	}
}