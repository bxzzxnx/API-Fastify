import { prisma } from '../lib/prisma.js'

export function defaultRoute(req, reply) {
  reply.send({
    allUsers: '/users',
    specificUser: '/users/id',
  })
}

export async function getAllUsers(req, reply) {
  const users = await prisma.user.findMany()
  reply.send(users)
}

export async function getUser(req, reply) {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: { posts: true },
  })

  if (!user)
    reply.status(404).send({
      message: 'User not found',
    })

  reply.send(user)
}

export async function addUser(req, reply) {
  const { name } = req.body

  const user = await prisma.user.create({
    data: {
      name,
    },
  })

  reply.code(201).send(user)
}

export async function editUser(req, reply) {
  const { id } = req.params
  const { name } = req.body

  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  })

  reply.send(updateUser)
}

export async function deleteUser(req, reply) {
  const { id } = req.params

  await prisma.user.delete({
    where: {
      id,
    },
  })

  reply.send({
    message: 'User deleted successfully',
  })
}
