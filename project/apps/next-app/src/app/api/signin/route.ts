import { MakeSignIn } from "@repo/main"


export const POST = async (request: Request) => {
    const body = await request.json()
    const signInUseCase = MakeSignIn()
    const response = await signInUseCase.Execute({
        username: body.username,
        password: body.password
    })

    return new Response(JSON.stringify(response), { status: 200 })
}