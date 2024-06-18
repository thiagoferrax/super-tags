import Email from '../../shared/Email'
import Entidade, { EntidadeProps } from '../../shared/Entidade'
import NomePessoa from '../../shared/NomePessoa'
import SenhaHash from '../../shared/SenhaHash'

export interface UsuarioProps extends EntidadeProps {
    nome?: string
    email?: string
    senha?: string
    admin?: boolean
}   
export default class Usuario extends Entidade<Usuario, UsuarioProps> {
    readonly nome: NomePessoa
    readonly email: Email
    readonly senha: SenhaHash | null
    readonly admin: boolean

    constructor(props: UsuarioProps) {
        super(props)

        this.nome = new NomePessoa(props.nome!, 'nome', 'Usuário')
        this.email = new Email(props.email, 'email', 'Usuário')
        this.senha = props.senha ? new SenhaHash(props.senha, 'senha', 'Usuário') : null
        this.admin = props.admin ?? false
    }

    semSenha(): Usuario {
        return this.clone({ senha: undefined })
    }
}