import { CreateUserParams, IUseCase, User, ValidationError } from "@repo/domain"
import { IApiController } from "../../protocols/IApiController"
import { HttpRequest, HttpResponse } from "../../models"
import { HttpResponseUtils } from "../../utils/HttpResponseUtils"

export class UserGetAllController implements IApiController<void> {
	constructor(private readonly useCase: IUseCase<void, User[]>) {
	}

	async Handle(req: HttpRequest<void>): Promise<HttpResponse> {
		try {
			const users = await this.useCase.Execute()
			return HttpResponseUtils.Ok(users)

		} catch (err: any) {
			if (err instanceof ValidationError) {
				return HttpResponseUtils.BadRequestError(err.code)
			}
			throw err
		}
	}
}