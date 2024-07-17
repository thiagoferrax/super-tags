import { SuperTagRepositoryPostgres } from "@repo/infra-db";

function MakeSuperTagRepositoryPostgres(): SuperTagRepositoryPostgres {
  return new SuperTagRepositoryPostgres();
}

function MakeSuperTagRepository(): SuperTagRepositoryPostgres {
  return MakeSuperTagRepositoryPostgres();
}

function MakeAddSuperTagRepository(): SuperTagRepositoryPostgres {
  return MakeSuperTagRepositoryPostgres();
}

function MakeEditSuperTagRepository(): SuperTagRepositoryPostgres {
  return MakeSuperTagRepositoryPostgres();
}

function MakeGetSuperTagById(): SuperTagRepositoryPostgres {
  return MakeSuperTagRepositoryPostgres();
}

function MakeSuperTagGetByTitulo(): SuperTagRepositoryPostgres {
  return MakeSuperTagRepositoryPostgres();
}
