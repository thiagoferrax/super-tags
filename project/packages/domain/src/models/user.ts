import { ValidationError } from "../errors";
import { Email } from "./email";

export class User {
	public readonly email: Email
	public readonly id: number | null
	public readonly name: string
	public readonly passwordHash: string
	constructor(
		id: number | null,
		name: string,
		email: string,
		passwordHash: string
	) {
		if (!name) {
			throw new ValidationError("User", "name", "NAME_REQUIRED")
		}

		if (!passwordHash) {
			throw new ValidationError("User", "password", "PASSWORD_REQUIRED")
		}
		this.email = new Email(email)
		console.log(passwordHash)
		this.passwordHash = passwordHash
		this.id = id
		this.name = name
	}
}