import { User } from "../../models/user";

export interface IAddUserRepository {
    Add(user: User): Promise<void>
}