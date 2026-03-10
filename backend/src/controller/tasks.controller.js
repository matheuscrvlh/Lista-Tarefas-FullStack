// IMPORT
import {
    getAllTasks,
    insertTask,
    removeTask,
    toggleTaskStatus
} from "../services/tasks.services.js"

// CONTROLLERS
export async function getTasks(req, reply) {
    const tasks = await getAllTasks()
    return tasks
}

export async function createTask(req, reply) {
    const { task } = req.body

    await insertTask(task)

    return reply.status(201).send({ msg: "Task criada!" })
}

export async function deleteTask(req, reply) {
    const { taskId } = req.params

    await removeTask(taskId) 

    return reply.send({ msg: "Task deletada!" })
}

export async function updateTaskStatus(req, reply) {
    const { taskId } = req.params

    await toggleTaskStatus(taskId) 

    return reply.send({ msg: "Status alterado!" })
}