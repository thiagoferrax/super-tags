import { ISuperTagRepository, SuperTag } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";

class SuperTagBD {
  public readonly id: number | null;
  public readonly titulo: string;
  public readonly texto: string;
  public readonly parentId: number | null;
  constructor(
    id: number | null,
    titulo: string,
    texto: string,
    parentId: number | null
  ) {
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.parentId = parentId;
  }
}

class PropriedadeBD {
  public readonly seqProp: number | null;
  public readonly chave: string;
  public readonly valor: string;
  public readonly superTagId: number | null;
  constructor(
    seqProp: number | null,
    chave: string,
    valor: string,
    superTagId: number | null
  ) {
    this.seqProp = seqProp;
    this.chave = chave;
    this.valor = valor;
    this.superTagId = superTagId;
  }
}

export class SuperTagRepositoryPostgres implements ISuperTagRepository {
  _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  async GetAll(): Promise<SuperTagBD[]> {
    const superTag = await this._db.superTag.findMany();
    return superTag.map(
      (st) => new SuperTagBD(st.id, st.titulo, st.texto, st.parentId)
    );
  }

  async Add(superTag: SuperTag): Promise<void> {
    // tag pai
    const superTagBD = new SuperTagBD(
      null,
      superTag.titulo,
      superTag.texto,
      null
    );
    const tagPai = await this._db.superTag.create({
      data: {
        titulo: superTagBD.titulo,
        texto: superTagBD.texto,
        parentId: superTagBD.parentId,
      },
    });

    // propriedades tag pai
    superTag.propriedades.map(async (pp) => {
      let propPaiBD = new PropriedadeBD(
        null,
        pp.chave.value,
        pp.value.value,
        tagPai.id
      );
      await this._db.propriedade.create({
        data: {
          chave: propPaiBD.chave,
          valor: propPaiBD.valor,
          superTagId: propPaiBD.superTagId,
        },
      });
    });

    // tag filha(s)
    superTag.superTags.map(async (tf) => {
      let tagfilhaBD = new SuperTagBD(null, tf.titulo, tf.texto, tagPai.id);
      let tagFilha = await this._db.superTag.create({
        data: {
          titulo: tagfilhaBD.titulo,
          texto: tagfilhaBD.texto,
          parentId: tagfilhaBD.parentId,
        },
      });

      // propriedades tag filha
      tf.propriedades.map(async (pf) => {
        let propFilhaBD = new PropriedadeBD(
          null,
          pf.chave.value,
          pf.value.value,
          tagFilha.id
        );
        await this._db.propriedade.create({
          data: {
            chave: propFilhaBD.chave,
            valor: propFilhaBD.valor,
            superTagId: propFilhaBD.superTagId,
          },
        });
      });
    });
  }

  Edit(supertag: SuperTag): Promise<void> {
    throw new Error("Method not implemented.");
  }
  GetById(id: number): Promise<SuperTag> {
    throw new Error("Method not implemented.");
  }
  GetByTitulo(titulo: string): Promise<SuperTag> {
    throw new Error("Method not implemented.");
  }
}
