import { ISuperTagRepository } from "@repo/domain";
import { SuperTagRepositoryPostgres } from "@repo/infra-db";


export function makeSuperTagRepository(): ISuperTagRepository {
	return new SuperTagRepositoryPostgres();
}

