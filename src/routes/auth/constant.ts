type AuthProviderType = {
    domain: string,
    secret: string,
}

export const authProvider: AuthProviderType = {
    domain: process.env.AUTH0_DOMIAN!,
    secret: process.env.AUTH0_CLIENT_SECRET!,
}

type AuthConfigType = {
    client_id: string,
    client_secret: string,
    audience: string,
    grant_type: string,
}

export const authConfig: AuthConfigType = {
    client_id: process.env.AUTH0_CLIENT_ID!,
    client_secret: process.env.AUTH0_CLIENT_SECRET!,
    audience: process.env.AUTH0_AUDIENCE!,
    grant_type: "client_credentials"
}