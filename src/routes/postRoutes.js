import {
  getUserPosts,
  addUserPost,
  editPost,
  deletePost,
} from '../controllers/postController.js'

import {
  postPostsOptions,
  updatePost,
  postsOptions,
  deleteOptions,
} from '../options/options.js'

export function postRoutes(fastify, options, done) {
  fastify.get('/users/:id/posts', postsOptions, getUserPosts)

  fastify.post('/users/:id/posts', postPostsOptions, addUserPost)

  fastify.put('/users/:id/posts/:postId', updatePost, editPost)

  fastify.delete('/users/:id/posts/:postId', deleteOptions, deletePost)

  done()
}
