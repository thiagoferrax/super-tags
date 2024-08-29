import { CreateSuperTag } from "@repo/domain";
import { MakeSuperTagRepository } from "../../infra/db/make-supertag-repository";

export function MakeSuperTag(): CreateSuperTag {
  return new CreateSuperTag(MakeSuperTagRepository());
}
