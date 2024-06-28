import { ValidationError } from "../../src/errors/validationError";
import { Email } from "../../src/models/email";



describe("Email VO tests", () => {
    test('Should throw ValidationError if no email is provided', () => {
        expect(() => new Email(undefined as any)).toThrow(new ValidationError("Email", "value", "EMAIL_REQUIRED"))
    });

    test('Should throw ValidationError if invalid email is provided', () => {
        expect(() => new Email("asd@a")).toThrow(new ValidationError("Email", "value", "INVALID_EMAIL"))
    });
})