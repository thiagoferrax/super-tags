export interface IEncrypter<T extends object> {
	Encrypt: (value: T) => Promise<string>
}
