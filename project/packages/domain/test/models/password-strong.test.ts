import { faker } from "@faker-js/faker";
import { ValidationError } from "../../src/errors/validationError";
import { PasswordStrong } from "../../src/models/password-strong";



describe("PasswordStrong VO tests", () => {

    test('Should throw ValidationError if no password is provided', async () => {
        expect(() => new PasswordStrong(
            undefined as any,
        )).toThrow(new ValidationError("PasswordStrong", "password", "PASSWORD_REQUIRED"))
    });

    test.each([
        faker.word.noun(faker.number.int({ min: 1, max: 7 })),
        faker.internet.password({ length: 9, pattern: /[a-z0-9!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Z0-9!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Za-z!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Za-z0-9]/ }),
    ])('Should throw ValidationError if provided password not have 8 caracters', async (password) => {
        expect(() => new PasswordStrong(password,
        )).toThrow(new ValidationError("PasswordStrong", "password", "PASSWORD_NOT_STRONG_ENOUGH"))
    });
})