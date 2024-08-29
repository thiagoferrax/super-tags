import { CreateUserParams, IUseCase, ValidationError } from "@repo/domain"
import { IApiController } from "../../protocols/IApiController"
import { HttpRequest, HttpResponse } from "../../models"
import { HttpResponseUtils } from "../../utils/HttpResponseUtils"

export class UserRegisterController implements IApiController<CreateUserParams> {
	constructor(private readonly useCase: IUseCase<CreateUserParams, void>) {
	}

	async Handle(req: HttpRequest<CreateUserParams>): Promise<HttpResponse> {
		try {
			await this.useCase.Execute({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			})
			return HttpResponseUtils.Created()

		} catch (err: any) {
			if (err instanceof ValidationError) {
				return HttpResponseUtils.BadRequestError(err.code)
			}
			throw err
		}
	}
}