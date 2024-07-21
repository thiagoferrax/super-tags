import { ValidationError } from "../errors";

export class MenuSuperTag {
  public readonly id: number | null;
  public readonly emoji: string;
  public readonly titulo: string;
  public readonly parentId: number | null;
  constructor(
    id: number | null,
    emoji: string,
    titulo: string,
    parentId: number | null
  ) {
    if (!titulo) {
      throw new ValidationError("MenuSuperTag", "titulo", "TITULO_REQUIRED");
    }

    if (!emoji) {
      throw new ValidationError("MenuSuperTag", "emoji", "EMOJI_REQUIRED");
    }
    this.id = id;
    this.emoji = emoji;
    this.titulo = titulo;
    this.parentId = parentId;
  }
}
