import { IEncrypter, IDecrypter } from '@repo/domain'

import jwt from 'jsonwebtoken'

export class JwtAdapter<T extends object> implements IEncrypter<T>, IDecrypter<T> {
	constructor(private readonly secret: string) { }

	async Encrypt(value: T): Promise<string> {
		return jwt.sign(value, this.secret)
	}

	async Decrypt(ciphertext: string): Promise<T> {
		return jwt.verify(ciphertext, this.secret) as T
	}
}
