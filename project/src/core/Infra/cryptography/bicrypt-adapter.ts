import { IHashComparer } from '@/core/domain/protocols/IHashComparer'
import { IHasher } from '@/core/domain/protocols/IHasher'
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