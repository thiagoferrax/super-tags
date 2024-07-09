export interface IDecrypter<T extends object> {
	Decrypt: (ciphertext: string) => Promise<T>
  }
  