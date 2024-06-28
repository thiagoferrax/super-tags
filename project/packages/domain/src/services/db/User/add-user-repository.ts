import { User } from "../../../models";

export interface IAddUserRepository {
    Add(user: User): Promise<void>
}