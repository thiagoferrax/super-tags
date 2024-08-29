import { makeGetAllUsersController, makeSignInController, makeUserRegisterController } from "@repo/main";
import { ExpressAdapter } from "../utils/adapters/ExpressAdapter";

export function UserManagmentRoutes(app: any) {
	app.post('/api/signin', async (req: any, res: any) => {
		console.log(req.body)
		const adapter = new ExpressAdapter(makeSignInController())
		return await adapter.Execute(req, res)
	});

	app.post('/api/users', async (req: any, res: any) => {
		const adapter = new ExpressAdapter(makeUserRegisterController())
		return await adapter.Execute(req, res)
	});
	app.get('/api/users', async (req: any, res: any) => {
		const adapter = new ExpressAdapter(makeGetAllUsersController())
		return await adapter.Execute(req, res)
	});
}





