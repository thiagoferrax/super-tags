import { Credentials } from "../models/Credentials";

export interface IAuthenticationGateway {
    Login(credentials: Credentials): Promise<string>
}