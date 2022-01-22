import { Static, Type } from "@sinclair/typebox";

export const CommonReturnInterface = {
    statusCode: Type.Integer(),
    message: Type.String(),
}

export type CommonReturnType = Static<typeof CommonReturnInterface>
