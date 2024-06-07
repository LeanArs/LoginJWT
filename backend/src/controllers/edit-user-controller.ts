import { FastifyReply, FastifyRequest } from "fastify";
import { EditUserService } from "../services/edit-user-service";

class EditUserController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const { name, email, password } = request.body as { name: string, email: string, password: string }
        const userService = new EditUserService()
        const user = await userService.execute({ id, name, email, password })
        reply.send(user)
    }
}
export {EditUserController}