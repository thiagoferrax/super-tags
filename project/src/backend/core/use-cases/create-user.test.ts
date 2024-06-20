import { faker } from "@faker-js/faker";
import { CreateUser } from "./create-user";
import { ValidationError } from "../errors/validationError";

describe("CreateUser usecase tests", () => {
    test('Should throw an exception if no name is provided', async () => {
        const sut = new CreateUser();
        await expect(() => sut.Execute({
            name: undefined as any,
            email: faker.internet.email(),
            password: faker.internet.password()
        })).toThrow(new ValidationError("CreateUserParams", "name", "NAME_REQUIRED"))
    });
})