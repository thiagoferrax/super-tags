import { SuperTag } from "../models/supertag";
import { ISuperTagRepository } from "../services";
import { MenuSuperTag, ValidationError } from "..";

export type CreateMenuSuperTagParams = {
  icone: string;
  titulo: string;
  parentId: number | null;
};

export class CreateMenuSuperTag {
  constructor(private readonly superTagRepository: ISuperTagRepository) {}

  async Execute(params: CreateMenuSuperTagParams): Promise<void> {
    const foundSuperTag = await this.superTagRepository.GetByTitulo(
      params.titulo
    );
    if (foundSuperTag) {
      throw new ValidationError(
        "CreateMenuSuperTag",
        null,
        "MENU_SUPERTAG_ALREADY_EXISTS"
      );
    }
    const menuSuperTag = new MenuSuperTag(
      null,
      params.icone,
      params.titulo
    );
  }
}
