import Validador from './Validador'

export default class SenhaForte {
    constructor(
        readonly valor: string = '',
        atributo?: string,
        objeto?: string
    ) {
        Validador.valor(valor, atributo, objeto).naoNulo().senhaForte().lancarSeErro()
    }

    static isValida(senha: string): boolean {
        return Validador.valor(senha).senhaForte().valido
    }
}