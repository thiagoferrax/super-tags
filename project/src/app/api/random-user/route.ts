import { User } from "@/backend/User"
import { UserRepositoryInMemory } from "@/backend/db/user-repository-in-memory"
import { UserRepositoryPostgres } from "@/backend/db/user-repository-postgres"
import { UserRepositorySQLite } from "@/backend/db/user-repository-sqlite"
import { faker } from "@faker-js/faker"

const userRepositoryPostgres = new UserRepositoryPostgres()
const userRepositoryInMemory = new UserRepositoryInMemory()
const userRepositorySQLite = new UserRepositorySQLite()

export const POST = async (request: Request) => {
    const user1 = new User(
        undefined,
        faker.person.fullName(),
        faker.internet.email(),
        faker.internet.password()
    )
    const user2 = new User(
        undefined,
        faker.person.fullName(),
        faker.internet.email(),
        faker.internet.password()
    )
    const user3 = new User(
        undefined,
        faker.person.fullName(),
        faker.internet.email(),
        faker.internet.password()
    )
    await userRepositoryPostgres.Add(user1);
    await userRepositoryInMemory.Add(user2);
    await userRepositorySQLite.Add(user3);

    return new Response("Success", { status: 201 })
}

export const GET = async (request: Request) => {
    const postgresUsers = await userRepositoryPostgres.GetAll();
    const InMemoryUsers = await userRepositoryInMemory.GetAll();
    const SQLiteUsers = await userRepositorySQLite.GetAll();

    const result = {
        postgresUsers,
        InMemoryUsers,
        SQLiteUsers
    }

    return new Response(JSON.stringify(result), { status: 200 })
}

export const DELETE = async (request: Request) => {
    await userRepositoryPostgres.ClearAll();
    await userRepositoryInMemory.ClearAll();
    await userRepositorySQLite.ClearAll();

    return new Response(undefined, { status: 200 })
}
