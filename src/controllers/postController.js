import { prisma } from '../lib/prisma.js'

export async function getUserPosts(req, reply) {
  const { id } = req.params

  const posts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
  })

  reply.send(posts)
}

export async function addUserPost(req, reply) {
  const { id } = req.params
  const { title, description, content } = req.body

  const newPost = await prisma.post.create({
    data: {
      authorId: id,
      title,
      description,
      content,
    },
  })

  reply.send(newPost)
}

export async function editPost(req, reply) {
  const { postId } = req.params
  const { title, description, content } = req.body

  const updatePost = await prisma.post.update({
    where: {
      postId,
    },
    data: {
      title,
      description,
      content,
    },
  })

  reply.send(updatePost)
}

export async function deletePost(req, reply) {
  const { postId } = req.params

  await prisma.post.delete({
    where: {
      postId,
    },
  })

  reply.send({
    message: 'Post deleted successfully',
  })
}
