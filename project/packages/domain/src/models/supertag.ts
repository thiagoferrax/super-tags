import { ValidationError } from "../errors";
import { IconEnum } from "./Icons";
import { Propriedade } from "./propriedade";

export class SuperTag {
	public readonly id: number | null;
	public readonly icon: IconEnum;
	public readonly titulo: string;
	public readonly conteudo: string;
	public readonly propriedades: Propriedade[];
	constructor(
		id: number | null,
		icon: IconEnum,
		titulo: string,
		conteudo: string,
		propriedades: Propriedade[] | [],
	) {
		if (!titulo) {
			throw new ValidationError("SuperTag", "titulo", "TITULO_REQUIRED");
		}
		if (!icon) {
	      throw new ValidationError("SuperTag", "icon", "ICON_REQUIRED");
	    }
		this.id = id;
		this.icon = icon;
		this.titulo = titulo;
		this.conteudo = conteudo;
		this.propriedades = propriedades;
	}

	static New() {
		return new SuperTag(null, IconEnum.folder, "Nova Super Tag", "", [])
	}

  AdicionarPropriedade(propriedade: Propriedade) {
    this.propriedades.push(propriedade);
  }
}
