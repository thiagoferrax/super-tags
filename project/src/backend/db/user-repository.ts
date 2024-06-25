import { User } from "../core/models/user"

export interface IAddUserRepository {
	Add(user: User): Promise<void>
}
export interface IGetAllUserRepository {
	GetAll(): Promise<User[]>
}
export interface IClearAllUserRepository {
	ClearAll(): Promise<void>
}
export interface IGetUserByEmailUserRepository {
	GetUserByEmail(email: string): Promise<User | undefined>
}

export interface IUserRepository {
	Add(user: User): Promise<void>
	GetAll(): Promise<User[]>
	ClearAll(): Promise<void>
	GetUserByEmail(email: string): Promise<User | undefined>
}