import { ISuperTagRepository, SuperTag } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";
import { Propriedade } from "@repo/domain/src/models/propriedade";
import { NomeSimples } from "@repo/domain/src/models/nomeSimples";
import { PropriedadeValor } from "@repo/domain/src/models/propriedadeValor";

class SuperTagBD {
  public readonly id: number | null;
  public readonly titulo: string;
  public readonly texto: string;
  public readonly userId: number;
  public readonly parentId: number | null;
  constructor(
    id: number | null,
    titulo: string,
    texto: string,
    userId: number,
    parentId: number | null
  ) {
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.userId = userId;
    this.parentId = parentId;
  }
}

class PropriedadeBD {
  public readonly seqProp: number | null;
  public readonly chave: string;
  public readonly valor: string;
  public readonly tipo: string;
  public readonly superTagId: number;
  constructor(
    seqProp: number | null,
    chave: string,
    valor: string,
    tipo: string,
    superTagId: number
  ) {
    this.seqProp = seqProp;
    this.chave = chave;
    this.valor = valor;
    this.tipo = tipo;
    this.superTagId = superTagId;
  }
}

export class SuperTagRepositoryPostgres implements ISuperTagRepository {
  _db: PrismaClient;
  constructor() {
    this._db = new PrismaClient();
  }

  // TO DO: buscar id do usuario logado

  _userId = 1;

  async GetAll(): Promise<SuperTagBD[]> {
    const superTag = await this._db.superTag.findMany();
    return superTag.map(
      (st) => new SuperTagBD(st.id, st.titulo, st.texto, st.userId, st.parentId)
    );
  }

  async Add(superTag: SuperTag): Promise<void> {
    // tag pai

    const superTagBD = new SuperTagBD(
      null,
      superTag.titulo,
      superTag.texto,
      this._userId,
      null
    );
    const tagPai = await this._db.superTag.create({
      data: {
        titulo: superTagBD.titulo,
        texto: superTagBD.texto,
        parentId: superTagBD.parentId,
        userId: superTagBD.userId,
      },
    });

    // propriedades tag pai
    superTag.propriedades.map(async (pp) => {
      let propPaiBD = new PropriedadeBD(
        null,
        pp.chave.value,
        pp.value.value,
        pp.value.type,
        tagPai.id
      );
      await this._db.propriedade.create({
        data: {
          chave: propPaiBD.chave,
          valor: propPaiBD.valor,
          tipo: propPaiBD.tipo,
          superTagId: propPaiBD.superTagId,
        },
      });
    });

    // tag filha(s)
    superTag.superTags.map(async (tf) => {
      let tagfilhaBD = new SuperTagBD(
        null,
        tf.titulo,
        tf.texto,
        this._userId,
        tagPai.id
      );
      let tagFilha = await this._db.superTag.create({
        data: {
          titulo: tagfilhaBD.titulo,
          texto: tagfilhaBD.texto,
          userId: tagfilhaBD.userId,
          parentId: tagfilhaBD.parentId,
        },
      });

      // propriedades tag filha
      tf.propriedades.map(async (pf) => {
        let propFilhaBD = new PropriedadeBD(
          null,
          pf.chave.value,
          pf.value.value,
          pf.value.type,
          tagFilha.id
        );
        await this._db.propriedade.create({
          data: {
            chave: propFilhaBD.chave,
            valor: propFilhaBD.valor,
            tipo: propFilhaBD.tipo,
            superTagId: propFilhaBD.superTagId,
          },
        });
      });
    });
  }

  Edit(supertag: SuperTag): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async GetById(id: number): Promise<SuperTag | undefined> {
    const superTagFilhasDB = await this._db.superTag.findMany({
      where: {
        parentId: id,
      },
    });

    const superTagFilhas: SuperTag[] = [];

    superTagFilhasDB.map(async (tf) => {
      let propriedadesDB = await this._db.propriedade.findMany({
        where: {
          superTagId: tf.id,
        },
      });

      let propriedades: Propriedade[] = [];
      propriedadesDB.map((pf) => {
        propriedades.push(
          new Propriedade(
            pf.seqProp,
            new NomeSimples(pf.chave),
            new PropriedadeValor(pf.tipo, pf.valor)
          )
        );
      });

      let superTag = new SuperTag(tf.id, tf.titulo, tf.texto, [], propriedades);
      superTagFilhas.push(superTag);
    });

    const superTagPaiDB = await this._db.superTag.findUnique({
      where: {
        id,
      },
    });

    const propriedadesPai = await this._db.propriedade.findMany({
      where: {
        superTagId: id,
      },
    });

    return new SuperTag(
      superTagPaiDB?.id,
      superTagPaiDB?.titulo,
      superTagPaiDB?.texto,
      superTagFilhas,
      propriedadesPai
    );
  }

  GetByTitulo(titulo: string): Promise<SuperTag> {
    throw new Error("Method not implemented.");
  }
}
