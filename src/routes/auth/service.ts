import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { SuccessUserAuthInterface, UserAuthInterface, UserAuthType } from "./type";
import { CommonReturnType, CommonReturnInterface } from "../common.type";
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { authConfig } from "./constant";

export default function(fastify: FastifyInstance, opts: FastifyPluginOptions, next: any,){
    fastify.post<{
        Body: UserAuthType,
        Response: UserAuthType | CommonReturnType,
    }>(
        "/",
        {
            schema: {
                body: UserAuthInterface,
                response: { 200: SuccessUserAuthInterface } || { 500: CommonReturnInterface },
            }
        },
        async(req, res) => {
            try{
                /** @ts-ignore */
                const { email, password } = req.body 
                // const user = await client.query(`SELECT FROM users WHERE email = $1 AND password = $2`, [email, password]);
                // if(!user) throw error
                const { data } = await axios.post(process.env.Auth0_REQUEST_URL!, authConfig);
                res.code(200).send({
                    statusCode: 200,
                    accessToken: data.access_token,
                })
                return
            }catch(err){
                console.log("DEBUG: ERROR ===== ", err)
                res.code(500).send({
                    statusCode: 500,
                    message: "Internal server error"
                })
                return
            }
        }
    )

    next()
}