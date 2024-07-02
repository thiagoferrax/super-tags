export interface IIndexable {
	[key: string]: any;
}

const descriptionsErrors: {
	[key: string]: string
} = {
	EMAIL_REQUIRED: "Email é obrigatório",
	EMAIL_INVALID: "Email é inválido",
	PASSWORD_REQUIRED: "Password é obrigatória",
	PASSWORD_NOT_STRONG_ENOUGH: "Password não é suficientemente forte"
}

export function GetErrorDescription(key: string | undefined): string | undefined {
	if (!key)
		return undefined

	return descriptionsErrors[key] || key;

}