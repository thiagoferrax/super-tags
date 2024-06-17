import { User } from "@/backend/User";
import { UserRepositoryInMemory } from "@/backend/user-repository-in-memory"
export const GET = async () => {
	const respository = new UserRepositoryInMemory();
	const users = await respository.GetAll();
	return Response.json(users)
}

export const POST = async (request: Request) => {
	const body = await request.json()
	const respository = new UserRepositoryInMemory();
	const newId = await respository.GetNextId()
	respository.Add(new User(newId, body.name, body.email, body.password))
	return new Response("Success", { status: 201 })
}

export const DELETE = async (request: Request) => {
	const respository = new UserRepositoryInMemory();
	await respository.ClearAll();
	return new Response(undefined, { status: 204 })
}