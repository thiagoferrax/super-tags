import { ValidationError } from "../errors/validationError"

export type CreateUserParams = {
    name: string,
    email: string,
    password: string
}

const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export class CreateUser {
    constructor() {

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
    }
}