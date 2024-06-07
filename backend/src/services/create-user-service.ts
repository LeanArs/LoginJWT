import prismaClient from "../prisma"

interface CreateUserProps{
    name: string,
    email: string,
    password: string,
}

class CreateUserService{
    async execute({ name, email, password }: CreateUserProps){
        
        // Inserção no banco

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password,
            }
        })

        return user
    }
}

export {CreateUserService}