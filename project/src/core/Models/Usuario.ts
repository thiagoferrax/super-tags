import { Email } from "./Email"
import { Erro } from "./Erro"

export type UsuarioProps = {
	id?: string
	nome: string
	senha?: string
	email: string

}

export enum USUARIO_ERRORS {
	USUARIO_ID_OBRIGATORIO = 'USUARIO_ID_OBRIGATORIO',
	USUARIO_NOME_OBRIGATORIO = 'USUARIO_NOME_OBRIGATORIO',
	USUARIO_NOME_MAXIMO_CARACTERES = 'USUARIO_NOME_MAXIMO_CARACTERES',
	USUARIO_EMAIL_OBRIGATORIO = 'USUARIO_EMAIL_OBRIGATORIO'
}


export class Usuario {
	id: string
	nome: string
	senha?: string
	email: Email
	constructor(props: UsuarioProps) {
		if (!props.id) {
			throw new Erro({
				code: USUARIO_ERRORS.USUARIO_ID_OBRIGATORIO,
				class: "Usuario",
				method: "contructor"
			})
		}
		if (!props.nome) {
			throw new Erro({
				code: USUARIO_ERRORS.USUARIO_NOME_OBRIGATORIO,
				class: "Usuario",
				method: "contructor"
			})
		}		

		this.id = props.id
		this.nome = props.nome
		this.email = new Email(props.email)
		this.senha = props.senha
	}

	static Novo(props: UsuarioProps): Usuario {
		const id = "novo_id";
		return new Usuario({
			...props,
			id: id
		})
	}
}