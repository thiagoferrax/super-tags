import { Email } from "./Email"
import ValidationError from './ValidationError'
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
            throw new ValidationError({
                code: "PASSWORD_REQUIRED",
                object: "Credentials",
                value: props.password
            })
        }
        this.password = props.password
    }
}