import { CreateSuperTag, CreateSuperTagParams, CreateSuperTagResult, IUseCase } from "@repo/domain";
import { makeSuperTagRepository } from "../../infra/db/maker-super-tag-repository";

export function MakeCreateSuperTag(): IUseCase<CreateSuperTagParams, CreateSuperTagResult> {
    return new CreateSuperTag(makeSuperTagRepository())

}