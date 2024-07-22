import { ISuperTagRepository } from "@repo/domain/src/services";
import { SuperTagRepositoryPostgres } from "@repo/infra-db";

function MakeSuperTagRepositoryPostgres(): SuperTagRepositoryPostgres {
  return new SuperTagRepositoryPostgres();
}

export function MakeSuperTagRepository(): ISuperTagRepository {
  return MakeSuperTagRepositoryPostgres();
}
