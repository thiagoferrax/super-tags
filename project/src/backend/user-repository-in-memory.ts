import { User } from "./User"

type UsersDTO = {
	id: number,
	name: string,
	email: string,
	password: string
}

export class UserRepositoryInMemory {
	private static _usersInMemory: UsersDTO[] = []
	private static _incrementor: number = 0

	async GetAll(): Promise<User[]> {
		return UserRepositoryInMemory._usersInMemory.map(u => new User(u.id, u.name, u.email, u.password))
	}

	async Add(user: User): Promise<void> {

		UserRepositoryInMemory._usersInMemory.push({
			name: user.name,
			email: user.email,
			password: user.password,
			id: user.id
		})
	}

	async GetNextId(): Promise<number> {
		UserRepositoryInMemory._incrementor++;
		return UserRepositoryInMemory._incrementor
	}

	async ClearAll(): Promise<void> {
		UserRepositoryInMemory._incrementor = 0;
		UserRepositoryInMemory._usersInMemory = []
	}

	async GetUserByEmail(email: string): Promise<User | undefined> {
		return UserRepositoryInMemory._usersInMemory.find(u => u.email === email)
	}
}