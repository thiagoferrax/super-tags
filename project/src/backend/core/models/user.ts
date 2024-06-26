import { ValidationError } from "../errors/validationError";
import { Email } from "./Email";

export class User {
    public readonly email: Email
    public readonly id: string | null
    public readonly name: string
    public readonly passwordHash: string
    constructor(
        id: number | null,
        name: string,
        email: string,
        passwordHash: string
    ) {
        this.email = new Email(email)

        if (!name) {
            throw new ValidationError("User", "name", "NAME_REQUIRED")
        }

        if (!passwordHash) {
            throw new ValidationError("User", "password", "PASSWORD_REQUIRED")
        }
        this.passwordHash = passwordHash
        this.id = null
        this.name = name
    }
}