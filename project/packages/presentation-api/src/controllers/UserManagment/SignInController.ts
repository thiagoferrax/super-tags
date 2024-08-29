import { IUseCase, SignInParams, SignInResult, ValidationError } from "@repo/domain"
import { IApiController } from "../../protocols/IApiController"
import { HttpRequest, HttpResponse } from "../../models"
import { HttpResponseUtils } from "../../utils/HttpResponseUtils"

export class SignInController implements IApiController<SignInParams> {
	constructor(private readonly useCase: IUseCase<SignInParams, SignInResult>) {
	}

	async Handle(req: HttpRequest<SignInParams>): Promise<HttpResponse> {
		try {
			console.log(req.body.username)
			const res = await this.useCase.Execute({
				password: req.body.password,
				username: req.body.username
			})
			return HttpResponseUtils.Ok({
				token: res.token
			})
		} catch (err: any) {
			console.error(err);
			if (err instanceof ValidationError) {
				return HttpResponseUtils.BadRequestError(err.code)
			}
			throw err
		}
	}
}