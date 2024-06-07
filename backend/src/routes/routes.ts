import { Users } from "./users-routes"
import { server } from "../server"

export const routes = async () => {
    server.register(Users)
}