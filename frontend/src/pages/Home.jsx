// REACT
import { useState, useEffect } from "react"

// ICONS
import { Trash2 } from "lucide-react"

// API
import { getTasks, createTask, deleteTask, patchTask } from "../services/tasks.service"

export default function Home() {
    const [tarefa, setTarefa] = useState("")
    const [listaTarefas, setListaTarefas] = useState([])
    const [showInput, setShowInput] = useState(false)

    useEffect(() => {
        async function pegarTasks() {
            const res = await getTasks()
            setListaTarefas(res)
        }

        pegarTasks()
    }, [])

    async function addTask() {
        if(!tarefa){
            alert("Digite uma tarefa")
            return
        }

        await createTask(tarefa)

        const newTasks = await getTasks()
        setListaTarefas(newTasks)

        setTarefa("")
        setShowInput(false)
    }

    async function delTask(id){
        await deleteTask(id)

        setListaTarefas(prev =>
            prev.filter(t => t.id !== id)
        )
    }

    async function editTask(id){
        await patchTask(id)

        setListaTarefas(prev =>
            prev.map(t => 
                t.id === id
                ? {...t, status: !t.status}
                : t
            )
        )
    }

    return (
        <main className="
        bg-[#F8F3F7] min-h-screen w-full
        flex flex-col justify-center items-center
        gap-3 p-4
        ">
            {/* TITLE */}
            <div className="rounded w-80 p-2 flex flex-col gap-4">
                <h1 className="text-center text-2xl font-bold">
                    Lista de Tarefas
                </h1>
                <div className="flex justify-between">
                    <p className="font-medium">
                        Tarefas
                        <span className="bg-blue-200 rounded-full ml-1 px-2 font-bold">
                            {listaTarefas.length}
                        </span>
                    </p>
                    <p className="font-medium">
                        Concluídas
                        <span className="bg-green-300 rounded-full ml-1 px-2 font-bold">
                            {listaTarefas.filter(t => t.status).length}
                            {" de "}
                            {listaTarefas.length}
                        </span>
                    </p>
                </div>
            </div>

            {/* NOVA TASK */}
            <div className="
                bg-white flex flex-col justify-center items-center
                h-min w-96 text-center p-8 rounded-lg gap-4
            ">
                <div className="flex flex-col gap-6">
                    <button
                        className="
                            bg-[#e1f0e4] p-3 w-80 cursor-pointer
                            rounded-sm hover:bg-[#d3e4d6]
                        "
                        onClick={() => setShowInput(!showInput)}
                    >
                        Nova Tarefa
                    </button>
                    {showInput && (
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="Tarefa"
                                className="bg-gray-100 p-3 rounded-sm"
                                value={tarefa}
                                onChange={(e)=>setTarefa(e.target.value)}
                            />
                            <div className="flex gap-6">
                                <button
                                    className="
                                    bg-[#F2E5EF] p-2 w-1/2
                                    rounded-sm hover:bg-[#e2d3df]
                                    "
                                    onClick={addTask}
                                >
                                    Adicionar
                                </button>
                                <button
                                    className="
                                    bg-[#F2E5EF] p-2 w-1/2
                                    rounded-sm hover:bg-[#e2d3df]
                                    "
                                    onClick={()=>setTarefa("")}
                                >
                                    Limpar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* LISTA */}
            <div className="mr-auto ml-auto rounded-lg p-4">
                <ul>
                    {listaTarefas.map((t) => (
                        <div
                            key={t.id}
                            className="
                            bg-white max-w-96 min-w-96
                            p-4 rounded-lg mt-1
                            flex gap-2
                            "
                        >
                            <input
                                type="checkbox"
                                checked={t.status}
                                onChange={()=>editTask(t.id)}
                                className="cursor-pointer accent-green-600"
                            />
                            <span
                                className={`
                                max-w-74 wrap-break-words flex-1
                                ${t.status ? "line-through text-green-800" : ""}
                                `}
                            >
                                {t.task}
                            </span>
                            <button
                                onClick={()=>delTask(t.id)}
                                className="ml-auto cursor-pointer"
                            >
                                <Trash2 size={18}/>
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        </main>
    )
}