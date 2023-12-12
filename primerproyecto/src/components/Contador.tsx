import { MouseEvent } from "react";

const Contador = () => {

    const handleClick = (event: MouseEvent) => {
        console.log(event);
    }

    return (
        <div>
            <button onClick={handleClick}>Pulsa!</button>
        </div>
    );
}

export default Contador;