import { useDispatchContext, useStateContext } from "./TaskProvider";

const TaskList = () => {

    const state = useStateContext();
    const dispatch = useDispatchContext();

    return (
        <div>
            {state?.map(item => (
                <div key={item.id}>
                    <h3>{item.text}</h3>
                    <p>{item.category}</p>
                    <button onClick={() => {
                        dispatch!({ type: 'REMOVE_TASK', data: item.id });
                    }}>Eliminar</button>
                </div>
            ))}
        </div>
    );

}

export default TaskList;