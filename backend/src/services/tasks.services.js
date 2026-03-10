// SQL
import sql from "../database/connection.js";
import { randomUUID } from 'node:crypto'

// SERVICES
export async function getAllTasks() {
    const tasks = await sql`SELECT * FROM tasks`
    return tasks
}

export async function insertTask(task) {
    const id = randomUUID()
    const status = 'false'

    await sql`
        INSERT INTO tasks
        VALUES (${id}, ${task}, ${status})
    `
}

export async function removeTask(taskId) {
    await sql`
        DELETE FROM tasks
        WHERE id = ${taskId}
    `
}

export async function toggleTaskStatus(taskId) {
    await sql`
        UPDATE tasks
        SET status = NOT status
        WHERE id = ${taskId}
    `
}