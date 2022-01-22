import jwt from "jsonwebtoken";

export const customMiddleware = (req: any, res: any, next: any) => {
    const { access_token } = req.headers;
    try{
        jwt.verify(access_token, process.env.AUTH0_SECRET_KEY)
        next()
    }catch(err){
        res.send({
            statusCode: 401,
            message: "Unauthorized",
        })
        return
    }
}