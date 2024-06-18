import Validador from "./Validador"

export default class SenhaHash {
    constructor(
        readonly valor: string,
        atributo?: string,
        objeto?: string,
    ) {
        Validador.valor(valor, atributo, objeto).senhaHash().lancarSeErro()
    }

    static isValida(hash: string): boolean {
        return Validador.valor(hash).senhaHash().valido
    }
}