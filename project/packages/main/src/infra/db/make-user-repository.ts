import { IAddUserRepository, IGetUserByEmailRepository, IUserRepository } from "@repo/domain";
import { UserRepositoryInMemory, UserRepositoryPostgres, UserRepositorySQLite } from "@repo/infra-db";

function MakeUserRepositoryInMemory(): UserRepositoryInMemory {
    return new UserRepositoryInMemory()
}
function MakeUserRepositorySQLite(): UserRepositorySQLite {
    return new UserRepositorySQLite()
}
function MakeUserRepositoryPostgres(): UserRepositoryPostgres {
    return new UserRepositoryPostgres()
}


export function MakeUserRepository(): IUserRepository {
    return MakeUserRepositoryPostgres()
}

export function MakeAddUserRepository(): IAddUserRepository {
    return MakeUserRepositoryPostgres()
}

export function MakeGetUserByEmailRepository(): IGetUserByEmailRepository {
    return MakeUserRepositoryPostgres()
}

