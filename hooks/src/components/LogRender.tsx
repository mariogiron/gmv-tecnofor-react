import { ChangeEvent, useEffect, useRef, useState } from "react";

const LogRender = () => {

    const [cont, setCont] = useState(0);
    const [valor, setValor] = useState(0);
    // const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return <div>
        <p>{cont}</p>
        <p>Render Count {renderCount.current}</p>
        <button onClick={() => setCont(cont + 1)}>Cuenta</button>
        <input type="range" onChange={
            (e: ChangeEvent<HTMLInputElement>) => setValor(Number(e.currentTarget.value))
        } />
    </div>;
}

export default LogRender;