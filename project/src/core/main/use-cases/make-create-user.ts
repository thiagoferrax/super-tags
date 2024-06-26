import { CreateUser } from "@/core/domain";
import { MakeAddUserRepository } from "../infra/db/make-user-repository";
import { MakeHasher } from "../infra/cryptography/make-hash";

export function MakeCreateUser(): CreateUser {
    return new CreateUser(MakeAddUserRepository(), MakeHasher())
}