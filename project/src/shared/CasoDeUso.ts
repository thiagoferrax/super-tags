import { Usuario } from "../usuario"

export default interface CasoDeUso<E, S> {
    executar(entrada: E, usuario?: Usuario): Promise<S>
}