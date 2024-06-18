import TextoSimples from "./TextoSimples"
import Validador from "./Validador"

export default class NomePessoa extends TextoSimples {
    constructor(
        readonly completo: string,
        atributo?: string,
        objeto?: string,
    ) {
        super(completo, 4, 120, atributo, objeto)
    
        Validador.valor(completo, atributo, objeto)
            .regex(/^[a-zA-ZÀ-ú'\.-\s]*$/, "CARACTERES_INVALIDOS")
            .lancarSeErro()

        Validador.valor(this.completo.split(" ")[1], atributo, objeto)
            .naoVazio("SOBRENOME_INVALIDO")
            .lancarSeErro()
    }

    get primeiroNome() {
        return this.completo!.split(" ")[0]
    }

    get sobrenomes(): string[] {
        return this.completo!.split(" ").slice(1)
    }

    get ultimoSobrenome(): string {
        return this.completo!.split(" ").pop() as string
    }
}