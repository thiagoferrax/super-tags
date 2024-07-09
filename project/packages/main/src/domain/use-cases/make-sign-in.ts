import { MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHashComparer } from "../../infra/cryptography/make-hash";
import { SignIn } from "@repo/domain";
import { MakeDecrypter, MakeEncrypter } from "../../infra/cryptography/make-encrypter";

export function MakeSignIn(): SignIn {
	return new SignIn(MakeGetUserByEmailRepository(), MakeHashComparer(), MakeEncrypter())
}