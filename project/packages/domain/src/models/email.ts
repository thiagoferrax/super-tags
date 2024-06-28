import { ValidationError } from "../errors"

export class Email {
    private static REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    public readonly value: string
    constructor(value: string) {
        if (!value) {
            throw new ValidationError("Email", "value", "EMAIL_REQUIRED")
        }

        if (!Email.REGEX_EMAIL.test(value)) {
            throw new ValidationError("Email", "value", "EMAIL_INVALID")
        }
        this.value = value
    }
}