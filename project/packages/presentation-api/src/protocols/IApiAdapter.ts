export interface IApiAdapter<Req, Res> {
	Execute(req: Req, resp: Res): Promise<Res>
}