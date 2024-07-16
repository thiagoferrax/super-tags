import { ValidationError } from "../errors";
import { Propriedade } from "./propriedade";

export class SuperTag {
  public readonly id: number | null;
  public readonly titulo: string;
  public readonly texto: string;
  public readonly propriedades: Propriedade[];
  public readonly superTags: SuperTag[];
  constructor(
    id: number | null,
    titulo: string,
    texto: string,
    superTags: SuperTag[] | [],
    propriedades: Propriedade[] | []
  ) {
    if (!titulo) {
      throw new ValidationError("SuperTag", "titulo", "TITULO_REQUIRED");
    }
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.superTags = superTags;
    this.propriedades = propriedades;
  }
  Adicionar(superTag: SuperTag) {
    this.superTags.push(superTag);
  }
  AdicionarPropriedade(propriedade: Propriedade) {
    this.propriedades.push(propriedade);
  }
}
