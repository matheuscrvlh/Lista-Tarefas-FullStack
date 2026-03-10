// API
import { API_URL } from "./api.js";

// APIs
export async function getTasks() {
    try {
        const res = await fetch(`${API_URL}/task`)
        const data = await res.json()

        return data
    } catch(err) {
        console.error(err)
    }
}

export async function createTask(task) {
    try {
        const res = await fetch((`${API_URL}/task`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ task })
        })

        return res
    } catch(err) {
        console.error(err)
    }
}

export async function deleteTask(taskId) {
    try {
        await fetch((`${API_URL}/task/${taskId}`), {
            method: "DELETE"
        })
        return 
    } catch(err) {
        console.error(err)
    }
    
}

export async function patchTask(taskId) {
    try {
        await fetch((`${API_URL}/task/${taskId}`), {
            method: "PATCH"
        })
    } catch(err) {
        console.error(err)
    }
}