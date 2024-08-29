import { IAddUserRepository, IGetUserByEmailRepository, User, IUserRepository } from "@repo/domain"
import { PrismaClient } from "../../generated/postgres"

export class UserRepositoryPostgres implements IUserRepository, IAddUserRepository, IGetUserByEmailRepository {
	_db: PrismaClient
	constructor(connectionString: string) {
		this._db = new PrismaClient({
			datasources: {
				db: {
					url: connectionString,
				},
			}
		})
	}
	async GetById(id: number): Promise<User | null> {
		const user = await this._db.user.findFirst({
			where: {
				id
			}
		})
		return user ? new User(user.id, user.name, user.email, user.password) : null
	}

	async GetAll(): Promise<User[]> {
		const users = await this._db.user.findMany()
		return users.map(u => new User(u.id, u.name, u.email, u.password))
	}

	async Add(user: User): Promise<void> {
		await this._db.user.create({
			data: {
				name: user.name,
				email: user.email.value,
				password: user.passwordHash,
			}
		})
	}

	async ClearAll(): Promise<void> {
		await this._db.user.deleteMany()
	}

	async GetByEmail(email: string): Promise<User | undefined> {
		const user = await this._db.user.findFirst({
			where: {
				email
			}
		})
		return user ? new User(user.id, user.name, user.email, user.password) : undefined
	}
}