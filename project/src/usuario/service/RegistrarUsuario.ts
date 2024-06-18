import { Usuario } from '../../usuario'
import CasoDeUso from '../../shared/CasoDeUso'
import SenhaForte from '../../shared/SenhaForte'
import Validador from '../../shared/Validador'
import ProvedorCriptografia from '../provider/ProvedorCriptografia'
import RepositorioUsuario from '../provider/RepositorioUsuario'

export type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void> {
    constructor(
        private readonly repo: RepositorioUsuario,
        private readonly provedorCripto: ProvedorCriptografia
    ) {}

    async executar(entrada: Entrada): Promise<void> {
        const { nome, email, senha } = entrada
        const senhaForte = new SenhaForte(senha)

        const senhaCripto = this.provedorCripto.criptografar(senhaForte.valor)
        const novoUsuario = new Usuario({ nome, email, senha: senhaCripto })

        const usuarioExistente = await this.repo.obterPorEmail(email)
        Validador.valor(usuarioExistente?.email.valor)
            .nulo('USUARIO_JA_EXISTE')
            .lancarSeErro()

        await this.repo.salvar(novoUsuario)
    }
}