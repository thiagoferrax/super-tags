export class ValidationError extends Error {
    constructor(
        public readonly object: string,
        public readonly property: string,
        public readonly code: string
    ) {
        super("Validation error")
    }
}