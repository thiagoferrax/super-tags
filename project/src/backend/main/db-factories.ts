import { IUserRepository } from "../db/user-repository";
import { UserRepositoryInMemory } from "../db/user-repository-in-memory";
import { UserRepositorySQLite } from "../db/user-repository-sqlite";

export function MakeUserRepository(): IUserRepository {
    // return new UserRepositoryInMemory()
    return new UserRepositorySQLite()
}