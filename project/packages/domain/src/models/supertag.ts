import { ValidationError } from "../errors";
import { Propriedade } from "./propriedade";

export class SuperTag {
  public readonly id: number | null;
  public readonly emoji: string;
  public readonly titulo: string;
  public readonly texto: string;
  public readonly propriedades: Propriedade[];
  constructor(
    id: number | null,
    emoji: string,
    titulo: string,
    texto: string,
    propriedades: Propriedade[] | []
  ) {
    if (!titulo) {
      throw new ValidationError("SuperTag", "titulo", "TITULO_REQUIRED");
    }
    if (!emoji) {
      throw new ValidationError("SuperTag", "emoji", "EMOJI_REQUIRED");
    }
    this.id = id;
    this.emoji = emoji;
    this.titulo = titulo;
    this.texto = texto;
    this.propriedades = propriedades;
  }

  AdicionarPropriedade(propriedade: Propriedade) {
    this.propriedades.push(propriedade);
  }
}
