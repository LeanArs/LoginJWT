import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { CreateUserController } from "../controller/create-user-controller"
import { ListUsersController } from "../controller/list-users-controller"

export const Users = async (server: FastifyInstance) => {
    server.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    server.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply)
    })

    // server.put("/users", () => {
        
    // })
    
    // server.delete("/users", () => {
        
    // })
}

