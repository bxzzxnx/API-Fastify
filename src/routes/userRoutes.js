import {
  defaultRoute,
  getAllUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
} from '../controllers/userController.js'

import {
  defaultOptions,
  usersOptions,
  singleUserOptions,
  postUserOptions,
  updateUserOptions,
  deleteOptions,
} from '../options/options.js'

export function routes(fastify, options, done) {
  fastify.get('/', defaultOptions, defaultRoute)

  fastify.get('/users', usersOptions, getAllUsers)
  fastify.get('/users/', usersOptions, getAllUsers)

  fastify.get('/users/:id', singleUserOptions, getUser)

  fastify.post('/users', postUserOptions, addUser)

  fastify.put('/users/:id', updateUserOptions, editUser)

  fastify.delete('/users/:id', deleteOptions, deleteUser)

  done()
}
