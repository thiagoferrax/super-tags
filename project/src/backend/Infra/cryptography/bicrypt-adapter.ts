import { IHashComparer } from '@/backend/core/protocols/IHashComparer'
import { IHasher } from '@/backend/core/protocols/IHasher'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IHasher, IHashComparer {
    constructor(private readonly salt: number) { }
    Compare(value: string, valueTocompare: string): Promise<boolean> {
        return bcrypt.compare(value, valueTocompare)
    }
    Hash(hasedValue: string): Promise<string> {
        return bcrypt.hash(hasedValue, this.salt)
    }
}