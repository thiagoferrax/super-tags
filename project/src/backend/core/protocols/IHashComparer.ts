export interface IHashComparer {
    Compare(value: string, valueTocompare: string): Promise<boolean>
}