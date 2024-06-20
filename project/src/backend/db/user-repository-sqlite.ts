import { User } from "../User"
import { IUserRepository } from "./user-repository";
import { PrismaClient } from "../../../generated/sqlite"

export class UserRepositorySQLite implements IUserRepository {
    _db: PrismaClient
    constructor() {
        this._db = new PrismaClient()
    }
    async GetAll(): Promise<User[]> {
        const users = await this._db.user.findMany()
        return users.map(u => new User(u.id, u.name, u.email, u.password))
    }

    async Add(user: User): Promise<void> {
        await this._db.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        })
    }

    async ClearAll(): Promise<void> {
        await this._db.user.deleteMany()
    }

    async GetUserByEmail(email: string): Promise<User | undefined> {
        const user = await this._db.user.findFirst({
            where: {
                email
            }
        })
        return user ? new User(user.id, user.name, user.email, user.password) : undefined
    }
}