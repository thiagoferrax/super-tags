import { Usuario } from "../Models/Usuario";

export interface IUsuarioRepositorio {
	Add(usuario: Usuario): Promise<void>
}