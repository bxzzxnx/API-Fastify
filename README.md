# API-Fastify

Fastify API + Prisma

API desenvolvida com o framework Fastify e utilizando o Prisma ORM . 
<br>
Esta API foi feita como objeto de estudos e retorna os usuários


## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js 
- npm (ou yarn)

```bash
git clone https://github.com/bxzzxnx/Fastify-API.git
cd Fastify-API
````

Instalação dos pacotes:
```bash 
npm install
```

## Executando a API
```bash
npm run start
```

A API estará disponível em `http://localhost:3000` 

### Endpoints
#### GET
- "/" - Mostra um exemplo
- "/users" - Retorna todos os usuários
- "/users/{id} - Retorna o usuário com o id específicado com uma prévia dos posts
- "/users/{id}/posts" - Retorna todos os posts do usuário

#### POST
- "/users" - Cria um novo usuário com um campo
```bash
{
  "name": "New User"
}
```

- "/users/{id}/posts" - Cria um novo post para o usuário passado como parametro
```bash
{
  "title": "New Post",
  "description": "New Desc",
  "content": "New text"
}
```

#### UPDATE
- "/users/{id}" - Edita o nome do usuário passado por parâmetro
```bash
{
  "name": "Name Changed"
}
```
- "/users/{id}/posts/{postId}" - Edita o Post passado por parâmetro
```bash
{
  "title": "Changed Title",
  "description": "Changed Desc",
  "content": "Changed Text"
}
```

#### DELETE
- /users/{id} - Deleta o usuário passado por parâmetro
```bash
{
  message: 'User deleted successfully',
}
```


- /users/{id}/posts/{postId} - Deleta o usuário passado por parâmetro
```bash
{
  message: 'Post deleted successfully',
}
```

### Estrutura do Projeto

```
Fastify-API/
│   ├── node_modules/
│   ├── prisma/
│   ├── src/
│   │   └──server.js
│   │   └──lib/
|   |      └── prisma.js
│   │   └──options/
|   |      └── options.js
│   │   └──controllers/
|   |      └── userControllers.js
|   |      └── postControllers.js
│   │   └── routes/
|   |      └── userRoutes.js
|   |      └── postRoutes.js
│   ├── README.md
│   ├── .eslintrc.json
│   ├── .env
│   ├── .gitignore
```
