import { AuthorizationController, IApiController } from '@repo/presentation-api'
import { MakeUserRepository } from '../infra/db/make-user-repository';
import { MakeDecrypter } from '../infra/cryptography/make-encrypter';

export function makeAuthorizationController<T>(controller: IApiController<T>): IApiController<T> {
	return new AuthorizationController<T>(
		controller,
		MakeUserRepository(),
		MakeDecrypter()
	)
}
