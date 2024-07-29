import { CreateSuperTagParams, CreateSuperTagResult, IUseCase } from "@repo/domain"
import { IApiController } from "../../protocols/IApiController"
import { HttpRequest, HttpResponse } from "../../models"

export class CreateSuperTagController implements IApiController<CreateSuperTagParams> {
	constructor(private readonly useCase: IUseCase<CreateSuperTagParams, CreateSuperTagResult>) {
	}

	async Handle(req: HttpRequest<CreateSuperTagParams>): Promise<HttpResponse> {
		const res = await this.useCase.Execute({
			userId: req.headers!.user!.id!
		})
		return {
			body: {
				id: res.id
			},
			status: 201
		}
	}

}