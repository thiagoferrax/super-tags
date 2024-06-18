import Validador from "./Validador"

export default class TextoSimples {
    constructor(
        readonly completo: string,
        minimo: number,
        maximo: number,
        atributo?: string,
        objeto?: string,
    ) {
        this.completo = completo?.trim() ?? ""
        Validador.valor(completo, atributo, objeto)
            .naoVazio()
            .tamanhoMaiorOuIgualQue(minimo)
            .tamanhoMenorOuIgualQue(maximo)
            .lancarSeErro()
    }
}