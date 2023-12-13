import { ChangeEvent, useState, useMemo } from "react";

const factorial = (n: number): number => {
    console.log('Ejecuta factorial');
    return n <= 0 ? 1 : n * factorial(n - 1);
}

const CalcularFactorial = () => {

    const [num, setNum] = useState(1);
    const [cont, setCont] = useState(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNum(Number(event.currentTarget.value));
    }

    const result = useMemo(() => {
        return factorial(num);
    }, [num]);

    return (
        <div>
            <p>El resultado es {result}</p>
            <p>CONTADOR: {cont}</p>
            <input type="number" onChange={handleChange} />
            <button onClick={() => setCont(cont + 1)}>Incrementa</button>
        </div>
    );
}

export default CalcularFactorial;