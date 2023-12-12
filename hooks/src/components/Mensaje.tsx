import { ChangeEvent, useEffect, useState } from "react";

const Mensaje = () => {

    const [texto, setTexto] = useState<string>('');

    useEffect(() => {
        console.log('[useEffect] Inicial')
    }, []);

    useEffect(() => {
        console.log('[useEffect] Mensaje')

        return function cleanUp() {
            console.log('Clean Up');
        }
    }, [texto]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTexto(event.currentTarget.value);
    }

    return <div>
        <p>{texto}</p>
        <input type="text" onChange={handleChange} />
    </div>;

}

export default Mensaje;