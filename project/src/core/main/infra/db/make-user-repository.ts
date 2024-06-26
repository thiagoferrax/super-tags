import { IAddUserRepository, IGetUserByEmailRepository } from "@/core/domain";
import { UserRepositoryInMemory, UserRepositoryPostgres, UserRepositorySQLite } from "@/core/Infra";
import { IUserRepository } from "@/core/domain/db/User/user-repository";

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
	return MakeUserRepositoryInMemory()
}

export function MakeAddUserRepository(): IAddUserRepository {
	return MakeUserRepositoryInMemory()
}

export function MakeGetUserByEmailRepository(): IGetUserByEmailRepository {
	return MakeUserRepositoryInMemory()
}

