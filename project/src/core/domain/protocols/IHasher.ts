export interface IHasher {
    Hash(value: string): Promise<string>
}