import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { CreateUserController } from "../controller/users-controller"

export const CreateUser = async (server: FastifyInstance) => {
    server.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    // server.get("/users", () => {
        
    // })

    // server.put("/users", () => {
        
    // })

    // server.delete("/users", () => {
        
    // })
}