import Fastify from 'fastify'
import { routes } from './routes/userRoutes.js'
import { postRoutes } from './routes/postRoutes.js'

const fastify = Fastify()

fastify.register(routes)
fastify.register(postRoutes)

fastify.listen({
  port: 3000,
})
