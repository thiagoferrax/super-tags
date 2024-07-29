import { CreateSuperTagParams, GetAllSuperTag } from '@repo/domain';
import { CreateSuperTagController, GetAllSuperTagController, IApiController } from '@repo/presentation-api'
import { MakeCreateSuperTag } from '../domain/use-cases/make-create-super-tag';
import { makeAuthorizationController } from './makeAuthorizationController';
import { makeSuperTagRepository } from '../infra/db/maker-super-tag-repository';

export function makeCreateSuperTagController(): IApiController<CreateSuperTagParams> {
	return makeAuthorizationController(
		new CreateSuperTagController(
			MakeCreateSuperTag()
		)
	)
}
export function makeGetAllSuperTagsController(): IApiController<void> {
	return makeAuthorizationController(
		new GetAllSuperTagController(
			new GetAllSuperTag(makeSuperTagRepository())
		)
	)
}