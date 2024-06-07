import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUserService } from "../services/delete-user-service";

class deleteUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const userService = new DeleteUserService();
        const user = await userService.execute( id )
        reply.send(user)
    }
}
export { deleteUserController }