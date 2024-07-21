import { ISuperTagRepository, SuperTag } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";

export class SuperTagRepositoryPostgres implements ISuperTagRepository {
  _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  // TO DO: buscar id do usuario logado

  _userId = 1;

  async GetAll(): Promise<SuperTag[]> {
    const superTag = await this._db.superTag.findMany({
      where: {
        userId: this._userId,
      },
    });

    return superTag.map(
      (st) => new SuperTag(st.id, st.emoji, st.titulo, st.texto, [])
    );
  }

  async Add(superTag: SuperTag): Promise<void> {
    const tagPai = await this._db.superTag.create({
      data: {
        emoji: superTag.emoji,
        titulo: superTag.titulo,
        texto: superTag.texto,
        parentId: null,
        userId: this._userId,
      },
    });
  }

  async Edit(superTag: SuperTag): Promise<void> {
    await this._db.superTag.update({
      where: { id: superTag.id ? superTag.id : undefined },
      data: {
        emoji: superTag.emoji,
        titulo: superTag.titulo,
        texto: superTag.texto,
        parentId: null,
        userId: this._userId,
      },
    });
  }

  async GetById(id: number): Promise<SuperTag | undefined> {
    const superTag = await this._db.superTag.findUnique({
      where: {
        parentId: id,
      },
    });

    return superTag
      ? new SuperTag(
          superTag.id,
          superTag.emoji,
          superTag.titulo,
          superTag.titulo,
          []
        )
      : undefined;
  }
}
