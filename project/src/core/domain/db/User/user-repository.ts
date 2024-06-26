import { User } from "../../models/user"

export interface IUserRepository {
    GetAll(): Promise<User[]>
    ClearAll(): Promise<void>

}