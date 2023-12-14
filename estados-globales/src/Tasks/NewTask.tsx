import { FormEvent, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task, useDispatchContext } from "./TaskProvider";

const NewTask = () => {

    const textRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const dispatch = useDispatchContext();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const newTask: Task = {
            id: uuidv4(),
            text: textRef.current!.value,
            category: selectRef.current!.value,
            complete: false
        }

        dispatch!({ type: 'ADD_TASK', data: newTask });
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Texto</label>
            <input type="text" ref={textRef} />
        </div>
        <div>
            <label>Categoría</label>
            <select ref={selectRef}>
                <option value="leve">Leve</option>
                <option value="media">Media</option>
                <option value="urgente">Urgente</option>
            </select>
        </div>
        <input type="submit" value="Enviar" />
    </form>;
}

export default NewTask;