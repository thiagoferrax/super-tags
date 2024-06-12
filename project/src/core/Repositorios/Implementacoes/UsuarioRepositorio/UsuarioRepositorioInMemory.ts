import { Usuario } from "../../../Models/Usuario";
import { IUsuarioRepositorio } from "../../IUsuarioRepositorio";


type UsuarioDTO = {
	nome: string,
	senha: string,
	email: string
}

export class UsuarioRepositorioInMemory implements IUsuarioRepositorio {
	_usuarios: UsuarioDTO[] = []
	async Add(usuario: Usuario): Promise<void> {
		this._usuarios.push({
			email: usuario.email,
			senha: usuario.senha!,
			nome: usuario.nome
		})
	}

}