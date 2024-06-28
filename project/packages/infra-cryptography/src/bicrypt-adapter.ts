import { IHashComparer, IHasher } from '@repo/domain'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IHasher, IHashComparer {
    constructor(private readonly salt: number) { }
    Compare(hasedValue: string, valueTocompare: string): Promise<boolean> {
        return bcrypt.compare(valueTocompare, hasedValue)
    }
    Hash(hasedValue: string): Promise<string> {
        return bcrypt.hash(hasedValue, this.salt)
    }
}