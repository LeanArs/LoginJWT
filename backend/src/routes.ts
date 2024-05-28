import { CreateUser } from "./routes/users/create-user"
import { server } from "./server"

export const routes = async () => {
    server.register(CreateUser)
}