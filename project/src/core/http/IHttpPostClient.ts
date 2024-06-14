enum HTTP_RESPONSE_STATUSCODE {
    OK = 200,
    INTERNAL_SERVER_ERROR = 500
}

type HttpRequest<T> = {
    url: string
    data: T
}
type HttpResponse<R> = {
    data: R
    status: HTTP_RESPONSE_STATUSCODE
}


export interface IHttpPostClient<Req, Res> {
    Execute(data: HttpRequest<Req>): Promise<HttpResponse<Res>>
}