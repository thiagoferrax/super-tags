import { SuperTag } from "../models/supertag";
import { ISuperTagRepository } from "../services";
import { ValidationError } from "..";

export type CreateSuperTagParams = {
  titulo: string;
  texto: string;
  parentId: number | null;
};

export class CreateSuperTag {
  constructor(private readonly superTagRepository: ISuperTagRepository) {}

  async Execute(params: CreateSuperTagParams): Promise<void> {
    const foundSuperTag = await this.superTagRepository.GetByTitulo(
      params.titulo
    );
    if (foundSuperTag) {
      throw new ValidationError(
        "CreateSuperTag",
        null,
        "SUPERTAG_ALREADY_EXISTS"
      );
    }
    const superTag = new SuperTag(null, params.titulo, params.texto, [], []);
    if (!params.parentId) {
      this.superTagRepository.Add(superTag);
    } else {
      const parentSuperTag = await this.superTagRepository.GetById(
        params.parentId
      );
      parentSuperTag.Adicionar(superTag);
      this.superTagRepository.Edit(parentSuperTag);
    }
  }
}
