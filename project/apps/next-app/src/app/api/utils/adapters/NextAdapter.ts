import { IApiAdapter, IApiController } from "@repo/presentation-api";


export class NextAdapter<B> implements IApiAdapter<Request, Response> {
	constructor(private readonly handler: IApiController<B>) {

	}
	async Execute(req: Request, res?: Response): Promise<Response> {
		try {
			const body = await req.json()
			const HttpRequest = {
				body: body
			}
			const response = await this.handler.Handle(HttpRequest)
			return new Response(JSON.stringify(body), { status: response.status })
		} catch (err: any) {
			return new Response("UNEXPECTED_ERROR", { status: 500 })
		}
	}
}