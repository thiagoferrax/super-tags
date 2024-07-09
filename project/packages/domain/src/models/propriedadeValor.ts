export class PropriedadeValor {
	public readonly value: string
	public readonly type: string

	constructor(type: string, value: string) {
		this.value = value
		this.type = type
	}
}