import { faker } from "@faker-js/faker";
import { CreateUser } from "../../src/use-cases/create-user";
import { IAddUserRepository, IHasher, ValidationError, User } from "../../src";

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
    result: string = "some_value"
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
const getStrongPassword = () => {
    return faker.internet.password({ length: 2, pattern: /[A-Z]/ }) +
        faker.internet.password({ length: 2, pattern: /[a-z]/ }) +
        faker.internet.password({ length: 2, pattern: /[0-9]/ }) +
        faker.internet.password({ length: 2, pattern: /[!@#\$%\^&\*]/ })
}
describe("CreateUser usecase tests", () => {

    test('should throw if User throws', async () => {
        const { sut } = makeSut()
        await expect(() => sut.Execute({
            name: undefined as any,
            email: undefined as any,
            password: undefined as any
        })).rejects.toThrow(ValidationError)
    });

    test.only('Should call hasher with correct password', async () => {
        const { sut, passwordHasher } = makeSut()
        const password = getStrongPassword()
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
        const password = getStrongPassword()
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