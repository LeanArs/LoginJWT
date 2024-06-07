import prismaClient from "../prisma";

class ListUsersServices {
    async execute(){
        const users = await prismaClient.user.findMany()
        return users
    }
}

export { ListUsersServices }