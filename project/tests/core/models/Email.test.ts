import { Email } from "@/core/models/Email";
import { faker } from '@faker-js/faker';
test.each([
    undefined,
    "",
    "  ",
    "aasd@.pt",
    "aasd@as.",
    "aasdas.pt",
])('should throw if an invalid email is provided (%s)', (email: string | undefined) => {
    expect(() => new Email(email!)).toThrow(new Error("INVALID_EMAIL"))
});

test('should create email when valid email is provided', () => {
    const email = faker.internet.email()
    const sut = new Email(email)
    expect(sut.value).toBe(email)
});