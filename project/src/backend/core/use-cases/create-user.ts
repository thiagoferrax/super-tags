import { ValidationError } from "../errors/validationError"

export type CreateUserParams = {
    name: string,
    email: string,
    password: string
}
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
    }
}