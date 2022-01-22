import { Static, Type } from "@sinclair/typebox";

export const UserAuthInterface = {
    email: Type.String(),
    password: Type.String(),
}

export type UserAuthType = Static<typeof UserAuthInterface>

export const SuccessUserAuthInterface = {
    statusCode: Type.Integer(),
    accessToken: Type.String(),
}

export type SuccessUserAuthType = Static<typeof SuccessUserAuthInterface>