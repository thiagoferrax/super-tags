import { SuperTag } from "../models/supertag";
import { ISuperTagRepository } from "../services";
import { ValidationError } from "..";

export type CreateSuperTagParams = {
  emoji: string;
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
    const superTag = new SuperTag(
      null,
      params.emoji,
      params.titulo,
      params.texto,
      []
    );
  }
}
