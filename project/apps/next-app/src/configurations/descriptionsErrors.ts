export interface IIndexable {
    [key: string]: any;
}

const descriptionsErrors: {
    [key: string]: string
} = {
    EMAIL_REQUIRED: "Email é obrigatório",
    EMAIL_INVALID: "Email é inválido",
    PASSWORD_REQUIRED: "Password é obrigatória",
    PASSWORD_NOT_STRONG_ENOUGH: "Password não é suficientemente forte",
    USER_ALREADY_EXISTS: "Utilizador já registado",
	INVALID_CREDENTIALS: "Credenciais inválidas"
}

export function GetErrorDescription(key: string): string {
    if (!key)
        throw new Error("Nenhuma key foi fornecida para obtenção da descrição.")

    return descriptionsErrors[key] || key;
}
