export type ErroProps = {
	class?: string,
	method?: string,
	code: string,
}
export class Erro extends Error {
	class?: string
	method?: string
	code: string

	constructor(props: ErroProps) {
		super(props.code)
		this.code = props.code
		this.class = props.class
		this.method = props.method
	}
}