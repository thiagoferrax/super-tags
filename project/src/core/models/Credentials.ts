import { Email } from "./Email"

export type CredentialsProps = {
    username?: string,
    password?: string
}

export class Credentials {
    username: Email
    password: string

    constructor(props: CredentialsProps) {
        this.username = new Email(props.username!)
        if (!props.password) {
            throw new Error("PASSWORD_REQUIRED")
        }
        this.password = props.password
    }
}