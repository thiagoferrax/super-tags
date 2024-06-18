import { validate } from 'uuid'
import ErroValidacao from '../error/ErroValidacao'

export default class Validador {
    private constructor(
        readonly valor: any,
        readonly atributo: string | null,
        readonly objeto: string | null,
        readonly erros: ErroValidacao[] = []
    ) {}

    static valor(valor: any, atributo?: string, objeto?: string): Validador {
        return new Validador(valor, atributo ?? null, objeto ?? null)
    }

    naoVazio(erro: string = "VAZIO"): Validador {
        const validador = this.naoNulo(erro)
        if (Array.isArray(validador.valor)) {
            return validador.valor.length > 0 ? validador : validador.adicionarErro(erro)
        }
        return validador.valor?.trim() !== "" ? validador : validador.adicionarErro(erro)
    }

    nulo(erro: string = "NAO_NULO"): Validador {
        return this.valor === null || this.valor === undefined
            ? this
            : this.adicionarErro(erro)
    }

    naoNulo(erro: string = "NULO"): Validador {
        return this.valor !== null && this.valor !== undefined
            ? this
            : this.adicionarErro(erro)
    }

    tamanhoMenorOuIgualQue(
        tamanhoMaximo: number,
        erro: string = "TAMANHO_GRANDE",
    ): Validador {
        if (!this.valor) return this
        return this.valor.length <= tamanhoMaximo
            ? this
            : this.adicionarErro({ codigo: erro, max: tamanhoMaximo })
    }

    tamanhoMaiorOuIgualQue(
        tamanhoMinimo: number,
        erro: string = "TAMANHO_PEQUENO",
    ): Validador {
        if (!this.valor) return this
        return this.valor.length >= tamanhoMinimo
            ? this
            : this.adicionarErro({ codigo: erro, min: tamanhoMinimo })
    }

    static lancarErro(erro: string): never {
        throw [{ codigo: erro } as ErroValidacao]
    }

    uuid(erro: string = "ID_INVALIDO"): Validador {
        return validate(this.valor) ? this : this.adicionarErro(erro)
    }

    email(erro: string = "EMAIL_INVALIDO"): Validador {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
    }

    senhaHash(erro: string = "HASH_INVALIDO"): Validador {
        const regex = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
    }

    senhaForte(erro: string = "SENHA_FRACA"): Validador {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
    }

    regex(regex: RegExp, erro: string): Validador {
        return regex.test(this.valor) ? this : this.adicionarErro(erro)
    }

    private adicionarErro(codigoOuErro: string | ErroValidacao): Validador {
        const erroBase = typeof codigoOuErro === 'string' ? { codigo: codigoOuErro } : codigoOuErro
        const erro = {
            ...erroBase,
            valor: this.valor,
            atributo: this.atributo ?? undefined,
            objeto: this.objeto ?? undefined,
        }

        if (this.jaTemErro(erro)) return this
        return new Validador(this.valor, this.atributo, this.objeto, [...this.erros, erro])
    }

    get valido(): boolean {
        return this.erros.length === 0
    }

    lancarSeErro(): void | never {
        if (!this.erros.length) return
        throw this.erros
    }

    private jaTemErro(erro: ErroValidacao): boolean {
        return this.erros.some((e) => {
            return Object.keys(e).every((key) => {
                return e[key] === erro[key]
            })
        })
    }
}
