import { fastify } from 'fastify'
import { routes } from './routes/routes'
import cors from '@fastify/cors'

export const server = fastify()

server.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
}) 

server.register(cors)
server.register(routes)

server.listen({ port: 3333 }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log("Server is now listening on https://localhost:3333")
})