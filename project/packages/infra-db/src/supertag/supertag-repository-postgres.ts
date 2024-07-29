import { ISuperTagRepository, SuperTag } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";
import { IconEnum } from "@repo/domain/src/models/Icons";
import { Propriedade } from "@repo/domain/src/models/propriedade";
import { NomeSimples } from "@repo/domain/src/models/nomeSimples";
import { PropriedadeValor } from "@repo/domain/src/models/propriedadeValor";

export class SuperTagRepositoryPostgres implements ISuperTagRepository {
	_db: PrismaClient;
	constructor() {
		this._db = new PrismaClient();
	}
	async GetAll(userId: number): Promise<SuperTag[]> {
		console.log(userId)
		const superTags = await this._db.superTag.findMany({
			where: {
				userId: userId
			},
			include: {
				propriedade: true,
			},
		})
		return superTags.map(s =>
			new SuperTag(
				s.id,
				IconEnum[s.icon as keyof typeof IconEnum],
				s.titulo,
				s.conteudo,
				s.propriedade.map(p =>
					new Propriedade(
						p.id,
						new NomeSimples(p.chave),
						new PropriedadeValor(p.tipo, p.valor)
					)
				)
			)
		)
	}

	async Add(superTag: SuperTag, userId: number): Promise<number> {
		const createdTag = await this._db.superTag.create({
			data: {
				titulo: superTag.titulo,
				conteudo: superTag.conteudo,
				icon: superTag.icon,
				userId: userId
			},
		});
		return createdTag.id
	}
}
