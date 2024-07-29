import { CreateUserParams, SignInParams } from '@repo/domain';
import { IApiController, SignInController, UserRegisterController } from '@repo/presentation-api'
import { MakeSignIn } from '../domain/use-cases/make-sign-in';
import { MakeCreateUser } from '../domain/use-cases/make-create-user';

export function makeSignInController(): IApiController<SignInParams> {
	return new SignInController(
		MakeSignIn()
	)
}

export function makeUserRegisterController(): IApiController<CreateUserParams> {
	return new UserRegisterController(
		MakeCreateUser()
	)
}
