import { SuperTag } from "../models/supertag";
import { ISuperTagRepository } from "../services";
import { IUseCase } from "./IUseCase";

export type GetAllSuperTagParams = {
	userId: number
}

export class GetAllSuperTag implements IUseCase<GetAllSuperTagParams, SuperTag[]> {
	constructor(private readonly superTagRepository: ISuperTagRepository) { }

	async Execute(params: GetAllSuperTagParams): Promise<SuperTag[]> {
		return await this.superTagRepository.GetAll(params.userId)
	}
}
