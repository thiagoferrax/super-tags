import { User } from "../../../models"

export interface IGetUserByEmailRepository {
    GetByEmail(email: string): Promise<User | undefined>
}
