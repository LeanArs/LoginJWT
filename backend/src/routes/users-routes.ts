import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { CreateUserController } from "../controllers/create-user-controller"
import { ListUsersController } from "../controllers/list-users-controller"
import { deleteUserController } from "../controllers/delete-user-controller"

export const Users = async (server: FastifyInstance) => {
    server.post("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    })

    server.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply)
    })

    // server.put("/users", (request: FastifyRequest, reply: FastifyReply) => {
        
    // })
    
    server.delete("/users", (request: FastifyRequest, reply: FastifyReply) => {
        return new deleteUserController().handle(request, reply)
    })
}

