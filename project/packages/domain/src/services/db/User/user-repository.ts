import { User } from "../../../models"

export interface IUserRepository {
    GetAll(): Promise<User[]>
    ClearAll(): Promise<void>
    GetById(id: number): Promise<User | null>

}