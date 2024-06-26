import { faker } from "@faker-js/faker";
import { ValidationError } from "../errors/validationError";
import { Email } from "./email";
import { User } from "./user";



describe("User entity tests", () => {
    test('Should throw ValidationError if no name is provided', () => {
        expect(() => new User(null,
            undefined as any,
            faker.internet.email(),
            faker.internet.password()
        )).toThrow(new ValidationError("User", "name", "NAME_REQUIRED"))
    });
})