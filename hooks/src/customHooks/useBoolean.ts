import { useState } from "react";

export const useBoolean = (initialState = false):
    [boolean, { setTrue: Function, setFalse: Function, setToggle: Function }] => {
    const [state, setState] = useState(initialState);

    const handleTrue = () => setState(true);
    const handleFalse = () => setState(false);
    const handleToggle = () => setState(!state);

    return [
        state,
        {
            setTrue: handleTrue,
            setFalse: handleFalse,
            setToggle: handleToggle,
        },
    ];
};