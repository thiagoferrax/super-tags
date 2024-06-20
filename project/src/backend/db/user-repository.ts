import { User } from "../User"

export interface IUserRepository {
    GetAll(): Promise<User[]>
    Add(user: User): Promise<void>
    ClearAll(): Promise<void>
    GetUserByEmail(email: string): Promise<User | undefined>
}