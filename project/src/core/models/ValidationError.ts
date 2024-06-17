import { error } from "console"

export type ValidationErrorProps = {
    code: string,
    object?: string,
    attribute?: string,
    value?: any,
    extras?: string[]
}

export default class ValidationError extends Error {
    code: string
    object?: string
    attribute?: string
    value?: any
    extras?: string[]

    constructor(
        props: ValidationErrorProps
    ) {
        super(props.code)
        this.code = props.code
        this.object = props.object
        this.attribute = props.attribute
        this.value = props.value
        this.extras = props.extras
    }
}