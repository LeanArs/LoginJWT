import { fastify } from 'fastify'
import { routes } from './routes/routes'

export const server = fastify()

server.register(routes)

server.get('/', () => {
  return "Hello World"
})

server.listen({ port: 3333 }, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log("Server is now listening on https://localhost:3333")
})