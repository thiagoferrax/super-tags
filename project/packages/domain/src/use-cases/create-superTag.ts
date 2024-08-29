import { ValidationError } from "../errors";
import { SuperTag } from "../models/supertag";
import { ISuperTagRepository } from "../services";
import { IUseCase } from "./IUseCase";

export type CreateSuperTagResult = {
	id: number
}
export type CreateSuperTagParams = {
	userId: number
}
export class CreateSuperTag implements IUseCase<CreateSuperTagParams, CreateSuperTagResult> {
	constructor(private readonly superTagRepository: ISuperTagRepository) { }

	async Execute(params: CreateSuperTagParams): Promise<CreateSuperTagResult> {
		if (!params.userId) {
			throw new ValidationError("CreateSuperTag", "userId", "USERID_REQUIRED")
		}
		const newSuperTag = SuperTag.New()
		const id = await this.superTagRepository.Add(newSuperTag, params.userId)
		return {
			id
		}
	}
}
