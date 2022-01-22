import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import fastifyCors from "fastify-cors";
import { IncomingMessage, Server, ServerResponse } from "http";
import { pino } from "pino"
import { authProvider } from "./routes/auth/constant";
import Route from "./routes/route"

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: pino({
        level: 'info',
    })
})

server.register(fastifyCors, {
    origin: [/localhost/, /.*.ngrok.io/]
});

server.register(
    require('fastify-auth0-verify'),
    authProvider,
)

server.register(Route, {prefix: 'apis/v1/'})

server.listen(Number(process.env.PORT), '0.0.0.0', (err, address) => {
    if(err){
        console.log("DEBUG: error message ==", err);
        process.exit(1)
    }
    console.log("DEBUG: server listening on port == ", address)
})