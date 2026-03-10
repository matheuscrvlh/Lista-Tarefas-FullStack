# 📝 Lista de Tarefas - Full Stack

![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-Style-38bdf8)

Aplicação **full stack de lista de tarefas** desenvolvida para praticar integração entre **frontend e backend**, utilizando **React, Node.js e PostgreSQL**.

O sistema permite criar, concluir e remover tarefas, com **persistência de dados em banco de dados** através de uma **API REST**.

---

# 🔗 Demo

Frontend:  
https://matheuscrvlh.github.io/lista-tarefas-fullstack/

---

# 📸 Screenshots
<img width="552" height="945" alt="image" src="https://github.com/user-attachments/assets/ddb7d82d-2e80-40fc-8531-bf7adf91dff2" />

### Tela inicial
Interface principal exibindo as tarefas cadastradas.

Campo de input para criação de novas tarefas.

Visualização das tarefas com opções de **concluir** ou **remover**.

---

# ⚙️ Tecnologias utilizadas

## Frontend
- React
- Tailwind CSS
- JavaScript (ES6+)

## Backend
- Node.js
- Fastify
- API REST

## Banco de Dados
- PostgreSQL
- SQL

---

# 🧱 Arquitetura do Projeto

```
project
│
├── frontend
│   ├── components
│   ├── services
│   └── App.jsx
│
├── backend
│   ├── routes
│   ├── database
│   └── server.js
│
└── database
    └── schema.sql
```

---

# 🚀 Como rodar o projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

---

# 2️⃣ Backend

Entrar na pasta do backend

```bash
cd backend
```

Instalar dependências

```bash
npm install
```

Rodar o servidor

```bash
npm run dev
```

Servidor rodando em:

```
http://localhost:3333
```

---

# 3️⃣ Banco de dados

Criar a tabela no PostgreSQL:

```sql
CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    task VARCHAR(300),
    status BOOLEAN
);
```

---

# 4️⃣ Frontend

Entrar na pasta do frontend

```bash
cd frontend
```

Rodar o projeto

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# ✅ Funcionalidades

- ➕ Adicionar tarefas
- ✔️ Marcar tarefas como concluídas
- ❌ Remover tarefas
- 📊 Contador de tarefas totais
- 📈 Contador de tarefas concluídas
- 💾 Persistência no banco de dados
- 🔗 Integração com API REST
- 📱 Layout responsivo

---

# 🎯 Objetivo

Projeto desenvolvido para **prática de desenvolvimento full stack**, aplicando conceitos como:

- Integração **React + Node.js**
- Criação de **API REST**
- Manipulação de dados com **SQL**
- Persistência de dados com **PostgreSQL**
- Consumo de API no frontend
- Organização de projeto backend

---

# 👨‍💻 Autor

**Matheus Carvalho**

GitHub:  
https://github.com/matheuscrvlh
