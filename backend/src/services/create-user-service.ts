import prismaClient from "../prisma"
const bcrypt = require('bcrypt');

interface CreateUserProps{
    name: string,
    email: string,
    password: string,
}

class CreateUserService{
    async execute({ name, email, password }: CreateUserProps){

        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt);

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: hash,
            }
        });

        return user;
    }
}

export {CreateUserService}