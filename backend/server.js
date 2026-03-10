// EXTERNAL
import fastify from "fastify";
import cors from "@fastify/cors"

// ROUTES
import { taskRoutes } from './src/routes/tasks.routes.js';

const server = fastify()

await server.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
})

await server.register(taskRoutes)

server.listen({
    port: 3001
})