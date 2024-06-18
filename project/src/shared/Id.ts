import { v4 as uuid } from "uuid"
import Validador from "./Validador"

export default class Id {
    readonly valor: string

    constructor(valor?: string, atributo?: string, objeto?: string) {
        this.valor = valor ?? uuid()
        Validador.valor(this.valor, atributo, objeto).uuid().lancarSeErro()
    }

    static get novo() {
        return new Id()
    }

    igual(id: Id) {
        return this.valor === id.valor
    }

    diferente(id: Id) {
        return this.valor !== id.valor
    }
}