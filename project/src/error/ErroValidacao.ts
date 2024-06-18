export default interface ErroValidacao {
    codigo: string
    objeto?: string
    atributo?: string
    valor?: any
    [extras: string]: any // permite novas inclusoes de atributos
}