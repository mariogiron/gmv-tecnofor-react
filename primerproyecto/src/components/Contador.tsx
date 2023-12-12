import { MouseEvent, useState } from "react";

type ContadorProps = { onContadorClick: (event: MouseEvent) => void }

const createArr = () => {
    const items: string[] = [];
    for (let i = 0; i < 10; i++) {
        items.push(`Item ${i}`);
    }
    return items;
}

const Contador = ({ onContadorClick }: ContadorProps) => {

    const [cont, setCont] = useState<number>(0);
    const [arr, setArr] = useState<string[]>(createArr);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        // console.log('HIJO', event);
        event.stopPropagation();
        onContadorClick(event);

        // Modificar el valor de cont
        setCont(cont + 1);
    }

    const handleClickDiv = () => {
        // console.log('Se pulsa el DIV');
    }

    const incrementCount = () => {
        setCont(prevCont => prevCont + 1);
        setCont(prevCont => prevCont + 1);
        setCont(prevCont => prevCont + 1);
    }

    return (
        <div onClickCapture={handleClickDiv}>
            <p>{cont}</p>
            <p>{arr.length}</p>
            <button onClick={handleClick}>Pulsa!</button>
            <button onClick={incrementCount}>Incrementa 3</button>
        </div>
    );
}

export default Contador;