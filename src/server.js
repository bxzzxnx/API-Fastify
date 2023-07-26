import Fastify from 'fastify'
import { routes } from './routes/userRoutes.js'

const fastify = Fastify()

fastify.register(routes)

try {
  await fastify.listen({
    port: 3000,
  })
} catch (error) {
  fastify.log.error(error)
  process.exit(1)
}
