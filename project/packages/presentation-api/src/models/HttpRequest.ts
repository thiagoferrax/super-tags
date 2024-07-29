
export type HttpRequestUser = {
    id: number,
    email: string,
    name: string

}


export type HttpRequest<B> = {
    headers?: {
        token?: string | undefined
        user?: HttpRequestUser 
    },
    body: B
}