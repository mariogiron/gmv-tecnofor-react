import { ChangeEvent, useEffect, useRef, useState } from "react";

const ForceFocus = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const prevMensaje = useRef<string>(''); // ''
    const [mensaje, setMensaje] = useState<string>(''); // H

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    const handleClick = () => {
        if (inputRef.current)
            inputRef.current.focus();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMensaje(event.currentTarget.value); // H
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
            <p>{mensaje}</p>
            <p>{prevMensaje.current}</p>
            <input type="text" onChange={handleChange} />
        </div>
    );

}

export default ForceFocus;