import {  GetAllUsers } from "@repo/domain";
import {  MakeUserRepository } from "../../infra/db/make-user-repository";

export function MakeGetAllUser(): GetAllUsers {
    return new GetAllUsers(MakeUserRepository())
}