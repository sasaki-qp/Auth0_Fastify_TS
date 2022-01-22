import { FastifyInstance, FastifyPluginOptions } from "fastify";
import Auth from "./auth/service"
import Demo from "./demo/service"

export default function(fastify: FastifyInstance, opts: FastifyPluginOptions, next: any){
    fastify.register(Auth, {prefix: '/auth'})
    fastify.register(Demo, {prefix: '/demo'})
    next();
}