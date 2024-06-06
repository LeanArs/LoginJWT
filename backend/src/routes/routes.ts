import { CreateUser } from "./users-routes"
import { server } from "../server"

export const routes = async () => {
    server.register(CreateUser)
    // server.register(GetUser)
    // server.register(EditUser)
    // server.register(DeleteUser)
}