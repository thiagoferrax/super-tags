import { Credentials } from "@/core/models/Credentials";
import { faker } from '@faker-js/faker';
test('should throw if an invalid username is provided', () => {
    expect(() => new Credentials({ username: "aasdas.pt" })).toThrow()
});

test.each([undefined, null, ""])('should throw if no password is provided', (password: any) => {
    expect(() => new Credentials({ username: faker.internet.email(), password })).toThrow(new Error("PASSWORD_REQUIRED"))
});


test('should create credentials when valid props are provided', () => {
    const username = faker.internet.email()
    const password = faker.internet.password()
    const sut = new Credentials({ username, password })
    expect(sut.password).toBe(password)
    expect(sut.username.value).toBe(username)
});