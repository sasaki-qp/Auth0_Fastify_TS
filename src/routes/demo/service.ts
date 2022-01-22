import { customMiddleware } from "@/middleware";
import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default function(fastify: FastifyInstance, opts: FastifyPluginOptions, next: any,){
    fastify.get(
        '/', 
        {
            preHandler: [ customMiddleware ]
        }, 
        async(req, res) => {
            try{
                res.code(200).send({
                    statusCode: 200,
                    message: 'Success'
                })
                return;
            }catch(err){
                res.code(500).send({
                    statusCode: 500, 
                    message: 'Internal server error'
                })
                return;
            }
        }
    )

    next()
}