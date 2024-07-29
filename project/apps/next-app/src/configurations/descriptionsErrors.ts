export interface IIndexable {
    [key: string]: any;
}

const descriptionsErrors: {
    [key: string]: string
} = {
    EMAIL_REQUIRED: "E-mail é obrigatório",
    EMAIL_INVALID: "E-mail é inválido",
    PASSWORD_REQUIRED: "Senha é obrigatória",
    PASSWORD_NOT_STRONG_ENOUGH: "Senha não é suficientemente forte",
    USER_ALREADY_EXISTS: "Usuário já registrado",
    INVALID_CREDENTIALS: "Credenciais inválidas"
}

export function GetErrorDescription(key: string): string {
    if (!key)
        throw new Error("Nenhuma key foi fornecida para obtenção da descrição.")

    return descriptionsErrors[key] || key;
}
