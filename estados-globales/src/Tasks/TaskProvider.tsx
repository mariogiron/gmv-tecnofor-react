import { createContext, useReducer, Dispatch, useContext } from "react";

export interface Task {
    id: string;
    text: string;
    category: string;
    complete: boolean;
}

type Actions =
    | { type: 'ADD_TASK', data: Task }
    | { type: 'REMOVE_TASK', data: string } // Eliminamos con el ID
type State = Array<Task>;
type TaskProviderProps = { children: JSX.Element };

// Reducer
const reducer = (state: State, action: Actions) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TASK': {
            return [...state, action.data]
        }
    }
    return state;
}

// Contextos
const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatch<Actions> | null>(null);

// Custom hooks
export const useStateContext = () => {
    return useContext(StateContext);
}

export const useDispatchContext = () => {
    return useContext(DispatchContext);
}


const TaskProvider = ({ children }: TaskProviderProps) => {

    const [state, dispatch] = useReducer(reducer, []);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )

}

export default TaskProvider;