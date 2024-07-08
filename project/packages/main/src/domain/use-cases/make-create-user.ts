import { CreateUser } from "@repo/domain";
import { MakeAddUserRepository, MakeGetUserByEmailRepository } from "../../infra/db/make-user-repository";
import { MakeHasher } from "../../infra/cryptography/make-hash";

export function MakeCreateUser(): CreateUser {
  return new CreateUser(MakeAddUserRepository(), MakeGetUserByEmailRepository(), MakeHasher())
}