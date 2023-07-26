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
- "/" - Mostra um exemplo
- "/users" - Retorna todos os usuários
- "/users/{id} - Retorna o usuário com o id específicado

### Estrutura do Projeto

```
Fastify-API/
│   ├── node_modules/
│   ├── prisma/
│   ├── src/
│   │   └──server.js
│   │   └──controllers/
|   |      └── userControllers.js
│   │   └── routes/
|   |      └── userRoutes.js
│   ├── README.md
│   ├── .eslintrc.json
│   ├── .env
│   ├── .gitignore
```
