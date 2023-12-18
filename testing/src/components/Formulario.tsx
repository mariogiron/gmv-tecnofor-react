import { ChangeEvent, FormEvent, useState } from "react"

interface Task {
    text: string,
    priority: string
}

type FormularioProps = { createTask: (newTask: Task) => void }

const Formulario = ({ createTask }: FormularioProps) => {

    const [task, setTask] = useState<Task>({ text: '', priority: '' });

    const handleChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
        setTask({
            ...task,
            [field]: event.currentTarget.value
        });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createTask(task);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="inputText">Texto</label>
            <input type="text" id="inputText" onChange={(e) => handleChange(e, 'text')} />
        </div>
        <div>
            <label htmlFor="inputPriority">Prioridad</label>
            <input type="text" id="inputPriority" onChange={(e) => handleChange(e, 'priority')} />
        </div>
        <input type="submit" value="Crear nueva tarea" />
    </form>
}

export default Formulario;