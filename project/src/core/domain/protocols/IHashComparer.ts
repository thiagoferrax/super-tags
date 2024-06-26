export interface IHashComparer {
    Compare(hashedValue: string, valueTocompare: string): Promise<boolean>
}