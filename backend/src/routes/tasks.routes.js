// IMPORT
import {
    getTasks,
    createTask,
    deleteTask,
    updateTaskStatus,
} from '../controller/tasks.controller.js'

// ROUTES
export async function taskRoutes(server) {
    server.get('/task', getTasks)

    server.post('/task', createTask)

    server.delete('/task/:taskId', deleteTask)

    server.patch('/task/:taskId', updateTaskStatus)
}