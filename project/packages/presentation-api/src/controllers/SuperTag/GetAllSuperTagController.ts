import { GetAllSuperTagParams, IUseCase, SuperTag } from "@repo/domain"
import { IApiController } from "../../protocols/IApiController"
import { HttpRequest, HttpResponse } from "../../models"

export class GetAllSuperTagController implements IApiController<GetAllSuperTagParams> {
	constructor(private readonly useCase: IUseCase<GetAllSuperTagParams, SuperTag[]>) {
	}

	async Handle(req: HttpRequest<GetAllSuperTagParams>): Promise<HttpResponse> {
		const res = await this.useCase.Execute({
			userId: req.headers!.user!.id!
		})
		return {
			body: res,
			status: 201
		}
	}

}