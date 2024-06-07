import { FastifyReply, FastifyRequest } from "fastify";
import { ListUsersServices } from "../services/list-users-service";

class ListUsersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listUserService = new ListUsersServices()
        const users = await listUserService.execute()
        reply.send(users)
    }
}
export { ListUsersController }