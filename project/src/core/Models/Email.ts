import { Erro } from "./Erro"
import { USUARIO_ERRORS } from "./Usuario"

export class Email {
	value: string
	constructor(value: string) {
		if (!value) {
			throw new Erro({
				code: USUARIO_ERRORS.USUARIO_EMAIL_OBRIGATORIO,
				class: "Usuario",
				method: "contructor"
			})
		}
		this.value = value
	}
}
