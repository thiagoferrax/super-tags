import { MenuSuperTagRepositoryPostgres } from "@repo/infra-db";

function MakeMenuSuperTagRepositoryPostgres(): MenuSuperTagRepositoryPostgres {
  return new MenuSuperTagRepositoryPostgres();
}

function MakeMenuSuperTagRepository(): MenuSuperTagRepositoryPostgres {
  return MakeMenuSuperTagRepositoryPostgres();
}

function MakeAddMenuSuperTagRepository(): MenuSuperTagRepositoryPostgres {
  return MakeMenuSuperTagRepositoryPostgres();
}

function MakeEditMenuSuperTagRepository(): MenuSuperTagRepositoryPostgres {
  return MakeMenuSuperTagRepositoryPostgres();
}

function MakeGetMenuSuperTagById(): MenuSuperTagRepositoryPostgres {
  return MakeMenuSuperTagRepositoryPostgres();
}
