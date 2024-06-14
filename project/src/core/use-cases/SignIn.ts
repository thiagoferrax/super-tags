import { IAuthenticationGateway } from "../gateway/IAuthenticationGateway"
import { Credentials } from "../models/Credentials"

type SignInParams = {
    username?: string
    password?: string
}

export class SignIn {
    constructor(
        // private readonly authGateway: IAuthenticationGateway
    ) {

    }
    async Execute(params: SignInParams): Promise<void> {
        const credentials = new Credentials({ username: params.username, password: params.password })

        const response = await fetch("http://localhost:3001", {
            body: JSON.stringify({
                username: credentials.username.value,
                password: credentials.password,

            })
        })
        const token = await response.json()
        // const token = this.authGateway.Login(credentials);
        window.localStorage.setItem("token", token);


    }
}