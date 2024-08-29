import { IPropriedadeRepository, Propriedade } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";
import { NomeSimples } from "@repo/domain/src/models/nome-simples";
import { PropriedadeValor } from "@repo/domain/src/models/propriedade-valor";

export class PropriedadeRepositoryPostgres implements IPropriedadeRepository {
  _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  async GetBySuperTagId(id: number): Promise<Propriedade[]> {
    const propriedade = await this._db.propriedade.findMany({
      where: {
        superTagId: id,
      },
    });

    const ListaPropriedade: Propriedade[] = [];
    propriedade.map((st) =>
      ListaPropriedade.push(
        new Propriedade(
          st.seqProp,
          new NomeSimples(st.chave),
          new PropriedadeValor(st.tipo, st.valor)
        )
      )
    );

    return ListaPropriedade;
  }

  async Add(id: number, propriedade: Propriedade): Promise<void> {
    await this._db.propriedade.create({
      data: {
        chave: propriedade.chave.value,
        valor: propriedade.value.value,
        tipo: propriedade.value.type,
        superTagId: id,
      },
    });
  }

  async Edit(id: number, propriedade: Propriedade): Promise<void> {
    await this._db.propriedade.update({
      where: { seqProp: propriedade.id ? propriedade.id : undefined },
      data: {
        chave: propriedade.chave.value,
        valor: propriedade.value.value,
        tipo: propriedade.value.type,
        superTagId: id,
      },
    });
  }

  async GetById(id: number): Promise<Propriedade | undefined> {
    const propriedade = await this._db.propriedade.findUnique({
      where: {
        seqProp: id,
      },
    });

    return propriedade
      ? new Propriedade(
          propriedade.seqProp,
          new NomeSimples(propriedade.chave),
          new PropriedadeValor(propriedade.tipo, propriedade.valor)
        )
      : undefined;
  }
}
