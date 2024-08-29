import { makeCreateSuperTagController } from "@repo/main";
import { NextAdapter } from "../utils/adapters/NextAdapter";

export const POST = async (request: Request) => {
    const controller = new NextAdapter(makeCreateSuperTagController())
    return await controller.Execute(request)
};

// export const GET = async (request: Request) => {
//     const controller = new NextAdapter(makeGetAllSuperTagsController())
//     return await controller.Execute(request)
// };





