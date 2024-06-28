import { IAddUserRepository, IGetUserByEmailRepository, User, IUserRepository } from "@repo/domain"

type UsersDTO = {
    id: number,
    name: string,
    email: string,
    password: string
}

export class UserRepositoryInMemory implements IUserRepository, IAddUserRepository, IGetUserByEmailRepository {


    private static _usersInMemory: UsersDTO[] = []
    private static _incrementor: number = 0

    async GetAll(): Promise<User[]> {
        return UserRepositoryInMemory._usersInMemory.map(u => new User(u.id, u.name, u.email, u.password))
    }

    async Add(user: User): Promise<void> {

        UserRepositoryInMemory._usersInMemory.push({
            name: user.name,
            email: user.email.value,
            password: user.passwordHash,
            id: this.GetNextId()
        })
    }

    private GetNextId(): number {
        UserRepositoryInMemory._incrementor++;
        return UserRepositoryInMemory._incrementor
    }

    async ClearAll(): Promise<void> {
        UserRepositoryInMemory._incrementor = 0;
        UserRepositoryInMemory._usersInMemory = []
    }
    async GetByEmail(email: string): Promise<User | undefined> {
        const user = UserRepositoryInMemory._usersInMemory.find(u => u.email === email);
        return user ? new User(user.id, user.name, user.email, user.password) : undefined
    }

    async GetUserByEmail(email: string): Promise<User | undefined> {
        throw new Error("Method not implemented.")
    }
}