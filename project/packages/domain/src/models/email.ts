import { ValidationError } from "../errors"

export class Email {
	private static REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	public readonly value: string
	constructor(value: string) {
		const error = Email.getErrorIfExists(value)
		if (error) {
			throw error
		}
		this.value = value
	}

	static getErrorIfExists(value: string): ValidationError | undefined {
		if (!value) {
			return new ValidationError("Email", "value", "EMAIL_REQUIRED")
		}

		if (!Email.REGEX_EMAIL.test(value)) {
			return new ValidationError("Email", "value", "EMAIL_INVALID")
		}
		return undefined
	}
}