const POSTPROPS = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      postId: { type: 'string' },
      authorId: { type: 'string' },
      title: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
    },
  },
}

const USERPROP = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    posts: POSTPROPS,
  },
}

// Default configs
export const defaultOptions = {
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

export const deleteOptions = {
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

// User configs
export const usersOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: USERPROP,
      },
    },
  },
}

export const singleUserOptions = {
  schema: {
    response: {
      200: USERPROP,
    },
  },
}

export const postUserOptions = {
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

export const updateUserOptions = {
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

// Posts configs
export const postsOptions = {
  schema: {
    response: {
      200: POSTPROPS,
    },
  },
}

export const updatePost = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'description', 'content'],
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        content: { type: 'string' },
      },
    },
    response: {
      200: USERPROP,
    },
  },
}

export const postPostsOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'description', 'content'],
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        content: { type: 'string' },
      },
    },
    response: {
      201: POSTPROPS,
    },
  },
}
