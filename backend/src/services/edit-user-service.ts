import prismaClient from "../prisma";

interface EditUserProps{
    id: string,
    name: string,
    email: string,
    password: string,
}

class EditUserService {
    async execute({ id, name, email, password }: EditUserProps){
        
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


        const user = await prismaClient.user.update({
            where: { id },
            data: { name, email, password }
          });

        return user
    }
}

export { EditUserService }