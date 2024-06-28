import { ValidationError } from "../errors"

export class PasswordStrong {
    private static REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    public readonly value: string
    constructor(value: string) {
        if (!value) {
            throw new ValidationError("PasswordStrong", "value", "PASSWORD_REQUIRED")
        }
        if (!PasswordStrong.REGEX_PASSWORD.test(value)) {
            throw new ValidationError("PasswordStrong", "value", "PASSWORD_NOT_STRONG_ENOUGH")
        }
        this.value = value
    }
}