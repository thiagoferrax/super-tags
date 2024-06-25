import { faker } from "@faker-js/faker";
import { CreateUser, CreateUserParams } from "./create-user";
import { ValidationError } from "../errors/validationError";
import { IAddUserRepository } from "@/backend/db/user-repository";
import { User } from "../models/user";
import { IHasher } from "../protocols/IHasher";

class UserRepositoryMock implements IAddUserRepository {
    user: User | undefined
    count: number = 0
    async Add(user: User): Promise<void> {
        this.user = user
        this.count++
    }

}
class HasherMock implements IHasher {
    value?: string
    result?: string
    async Hash(value: string): Promise<string> {
        this.value = value
        return this.result!
    }
}

type makeSutResult = {
    sut: CreateUser,
    userRepository: UserRepositoryMock,
    passwordHasher: HasherMock,
}


const makeSut = (): makeSutResult => {
    const passwordHasher = new HasherMock()
    const userRepository = new UserRepositoryMock()
    const sut = new CreateUser(userRepository, passwordHasher);

    return { sut, userRepository, passwordHasher }
}

describe("CreateUser usecase tests", () => {
    test('Should throw ValidationError if no name is provided', async () => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: undefined as any,
            email: faker.internet.email(),
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "name", "NAME_REQUIRED"))
    });

    test('Should throw ValidationError if no email is provided', async () => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: undefined as any,
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "email", "EMAIL_REQUIRED")
        )
    });

    test('Should throw ValidationError if invalid email is provided', async () => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: undefined as any,
            password: faker.internet.password()
        })).rejects.toThrow(new ValidationError("CreateUserParams", "email", "INVALID_EMAIL")
        )
    });

    test('Should throw ValidationError if no password is provided', async () => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: undefined as any,
        })).rejects.toThrow(new ValidationError("CreateUserParams", "password", "PASSWORD_REQUIRED")
        )
    });

    test.each([
        faker.word.noun(faker.number.int({ min: 1, max: 7 })),
        faker.internet.password({ length: 9, pattern: /[a-z0-9!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Z0-9!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Za-z!@#\$%\^&\*]/ }),
        faker.internet.password({ length: 9, pattern: /[A-Za-z0-9]/ }),
    ])('Should throw ValidationError if provided password not have 8 caracters', async (password) => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password,
        })).rejects.toThrow(new ValidationError("CreateUserParams", "password", "PASSWORD_NOT_STRONG_ENOUGH")
        )
    });


    test('Should call hasher with correct password', async () => {
        const { sut, passwordHasher } = makeSut()
        const password = faker.internet.password({ length: 2, pattern: /[A-Z]/ }) +
            faker.internet.password({ length: 2, pattern: /[a-z]/ }) +
            faker.internet.password({ length: 2, pattern: /[0-9]/ }) +
            faker.internet.password({ length: 2, pattern: /[!@#\$%\^&\*]/ })
        const sutParams = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password,
        }
        await sut.Execute(sutParams)
        expect(passwordHasher.value).toEqual(password)
    });

    test('Should call userRepository with correct params and only once', async () => {
        const { sut, userRepository, passwordHasher } = makeSut()
        passwordHasher.result = "some_hasValue"
        const password = faker.internet.password({ length: 2, pattern: /[A-Z]/ }) +
            faker.internet.password({ length: 2, pattern: /[a-z]/ }) +
            faker.internet.password({ length: 2, pattern: /[0-9]/ }) +
            faker.internet.password({ length: 2, pattern: /[!@#\$%\^&\*]/ })
        const sutParams = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password,
        }
        await sut.Execute(sutParams)
        expect(userRepository.user).toEqual(new User(null, sutParams.name, sutParams.email, passwordHasher.result))
        expect(userRepository.count).toBe(1)
    });
})