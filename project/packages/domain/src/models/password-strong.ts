import { ValidationError } from "../errors"

export class PasswordStrong {
    private static REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    public readonly value: string
    constructor(value: string) {
		const error = PasswordStrong.getErrorIfExists(value)
		if (error) {
			throw error
		}
        this.value = value
    }

	static getErrorIfExists(value: string): ValidationError | undefined {
		if (!value) {
            return new ValidationError("PasswordStrong", "value", "PASSWORD_REQUIRED")
        }
        if (!PasswordStrong.REGEX_PASSWORD.test(value)) {
            return new ValidationError("PasswordStrong", "value", "PASSWORD_NOT_STRONG_ENOUGH")
        }
		return undefined
	}
}