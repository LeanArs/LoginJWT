import { fastify } from 'fastify'
import { routes } from './routes/routes'
import cors from '@fastify/cors'

const port = Number(process.env.PORT) || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

export const server = fastify()

server.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
}) 

server.register(cors)
server.register(routes)

server.listen({ host:host, port: port }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log("Server is now listening")
})