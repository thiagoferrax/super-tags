import { Erro } from "../Models/Erro"
import { Usuario } from "../Models/Usuario"
import { IUsuarioRepositorio } from "../Repositorios/IUsuarioRepositorio"

export type CriarUsuarioParams = {
	nome: string
	password: string
	email: string
}
const SENHA_FORTE_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
export class CriarUsuario {

	constructor(private readonly usuarioRepositorio: IUsuarioRepositorio) {

	}
	async Execute(params: CriarUsuarioParams): Promise<void> {

		const usuario = Usuario.Novo({
			nome: params.nome!,
			email: params.email,
			senha: params.password
		})
		if (!SENHA_FORTE_REGEX.test(params.password)) {
			throw new Erro({
				code: "SENHA_FORTE_INVALIDA",
				class: "CriarUsuario",
				method: "Execute",
			})
		}

		this.usuarioRepositorio.Add(usuario)
	}
}