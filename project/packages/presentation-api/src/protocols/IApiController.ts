import { HttpRequest } from "../models/HttpRequest";
import { HttpResponse } from "../models/HttpResponse";

export interface IApiController<B> {
	Handle(req: HttpRequest<B>): Promise<HttpResponse>
}