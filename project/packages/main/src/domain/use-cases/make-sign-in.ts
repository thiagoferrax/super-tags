import { MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHashComparer } from "../../infra/cryptography/make-hash";
import { IUseCase, SignIn, SignInParams, SignInResult } from "@repo/domain";
import { MakeEncrypter } from "../../infra/cryptography/make-encrypter";

export function MakeSignIn(): IUseCase<SignInParams, SignInResult> {
	return new SignIn(MakeGetUserByEmailRepository(), MakeHashComparer(), MakeEncrypter())
}