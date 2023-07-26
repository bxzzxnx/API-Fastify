import {
  defaultRoute,
  getAllUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
} from '../controllers/userController.js'

const USERPROP = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    createdAt: { type: 'string' },
  },
}

const defaultOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          allUsers: { type: 'string' },
          specificUser: { type: 'string' },
        },
      },
    },
  },
}

const usersOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: USERPROP,
      },
    },
  },
}

const singleUserOptions = {
  schema: {
    response: {
      200: USERPROP,
    },
  },
}

const postUserOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: USERPROP,
    },
  },
}

const updateUserOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      200: USERPROP,
    },
  },
}

const deleteUserOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
}

export function routes(fastify, options, done) {
  // default route
  fastify.get('/', defaultOptions, defaultRoute)

  // GET users
  fastify.get('/users', usersOptions, getAllUsers)
  fastify.get('/users/', usersOptions, getAllUsers)

  // GET by id
  fastify.get('/users/:id', singleUserOptions, getUser)

  // POST
  fastify.post('/users', postUserOptions, addUser)

  // UPDATE
  fastify.put('/users/:id', updateUserOptions, editUser)

  // DELETE
  fastify.delete('/users/:id', deleteUserOptions, deleteUser)

  done()
}
