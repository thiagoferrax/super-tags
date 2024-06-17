import { SignIn } from "@/core/use-cases/SignIn";

test('should return execute correctly when valid credentials are provided', async () => {
    // console.log(window.fetch)
    // jest.spyOn(window, 'fetch').mockImplementation((): Promise<any> => Promise.resolve({ json: () => Promise.resolve("some_token") }))
    window.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve("some_token")
        })
    ) as any;
    const sut = new SignIn();
    await sut.Execute({
        username: "teste@test.pt",
        password: "some_password"
    })
    const savedToken = window.localStorage.getItem("token")
    expect(savedToken).toBe("some_token")
});