export class User {
	constructor(
		public readonly id: number | null,
		public readonly name: string,
		public readonly email: string,
		public readonly password: string
	) {

	}
}