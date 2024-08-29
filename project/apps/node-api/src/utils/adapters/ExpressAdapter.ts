import { Request as RequestExpress, Response as ResponseExpress } from 'express';
import { IApiAdapter, IApiController } from "@repo/presentation-api";


export class ExpressAdapter<B> implements IApiAdapter<RequestExpress, ResponseExpress> {
	constructor(private readonly handler: IApiController<B>) {

	}
	async Execute(req: RequestExpress, res: ResponseExpress): Promise<ResponseExpress> {
		try {
			const body = await req.body
			const HttpRequest = {
				body: body,
				headers: {
					token: req.headers.authorization?.slice(7),
				}
			}
			const response = await this.handler.Handle(HttpRequest)
			return res.status(response.status).json(response.body)
		} catch (err: any) {
			console.error(err);
			return res.status(500).json("UNEXPECTED_ERROR")
		}
	}
}