import { ValidationError } from "../errors";
import { Propriedade } from "./propriedade";

export class SuperTag {
    public readonly id: number | null
    public readonly name: string
    public readonly superTags: SuperTag[]
    public readonly propriedades: Propriedade[]
    constructor(
        id: number | null,
        name: string,
        superTags: SuperTag[] | [],
        propriedades: Propriedade[] | []
    ) {
        if (!name) {
            throw new ValidationError("SuperTag", "name", "NAME_REQUIRED")
        }
        this.id = id
        this.name = name
        this.superTags = superTags
        this.propriedades = propriedades
    }
    Adicionar(superTag: SuperTag) {
        this.superTags.push(superTag)
    }
    AdicionarPropriedade(propriedade: Propriedade) {
        this.propriedades.push(propriedade)
    }
}