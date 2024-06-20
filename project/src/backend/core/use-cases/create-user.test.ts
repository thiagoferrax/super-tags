import { faker } from "@faker-js/faker";
import { CreateUser } from "./create-user";
import { ValidationError } from "../errors/validationError";

describe("CreateUser usecase tests", () => {
    test('Should throw ValidationError if no name is provided', async () => {
        const sut = new CreateUser();
        await expect(() => sut.Execute({
            name: undefined as any,
            email: faker.internet.email(),
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "name", "NAME_REQUIRED"))
    });

    test('Should throw ValidationError if no email is provided', async () => {
        const sut = new CreateUser();
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: undefined as any,
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "email", "EMAIL_REQUIRED")
        )
    });

    test('Should throw ValidationError if invalid email is provided', async () => {
        const sut = new CreateUser();
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: undefined as any,
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "email", "INVALID_EMAIL")
        )
    });
})