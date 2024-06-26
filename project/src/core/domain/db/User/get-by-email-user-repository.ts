import { User } from "../../models/user"

export interface IGetUserByEmailRepository {
    GetByEmail(email: string): Promise<User | undefined>
}
