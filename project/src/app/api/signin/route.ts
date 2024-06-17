import { User } from "@/backend/User";
import { UserRepositoryInMemory } from "@/backend/user-repository-in-memory"
export const POST = async (request: Request) => {
	const body = await request.json()
	const respository = new UserRepositoryInMemory();
	const user = await respository.GetUserByEmail(body.username)
	console.log(user)
	console.log(body.password, body.username)
	if (!user || user.password !== body.password) {
		return new Response(JSON.stringify({
			error: "Invalid credentials"
		}), { status: 400 })
	}

	return new Response(JSON.stringify({
		token: "some_token"
	}), { status: 200 })
}
