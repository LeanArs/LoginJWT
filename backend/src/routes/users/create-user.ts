import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"

export const CreateUser = async (server: FastifyInstance) => {
    server.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send()
    })
}