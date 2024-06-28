import { User } from "../../../models"

export interface IUserRepository {
    GetAll(): Promise<User[]>
    ClearAll(): Promise<void>

}