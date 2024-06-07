import prismaClient from "../prisma";

class DeleteUserService {
    async execute(id: string){
        if(!id){
            throw new Error ("Solicitação inválida")
        }
        
        const findUser = await prismaClient.user.findFirst({
            where:{
                id: id
            }
        })

        if(!findUser){
            throw new Error ("Usuário inexistente")
        }

        await prismaClient.user.delete({
            where:{
                id: findUser.id
            }
        })
    }
}

export { DeleteUserService }