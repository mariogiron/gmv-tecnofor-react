import { useReducer, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Product {
    id: string,
    name: string,
    available: boolean
}

type State = Array<Product>;

type Action =
    | { type: 'ADD', data: string }
    | { type: 'REMOVE', data: number }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD': {
            return [
                ...state,
                { id: uuidv4(), name: action.data, available: false }
            ];
        }
        case 'REMOVE': {
            const stateCopy = [...state];
            stateCopy.splice(action.data, 1);
            return stateCopy;
        }
    }
    return state;
}

const ShoppingCart = () => {

    const [items, dispatch] = useReducer(reducer, []);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        dispatch({ type: 'ADD', data: inputRef.current!.value })
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Enviar</button>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={item.id} onClick={() => {
                            dispatch({ type: 'REMOVE', data: index })
                        }}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoppingCart;