import { useState } from "react";

const Condicionales = () => {

    const [show, setShow] = useState<boolean>(true);

    let element: JSX.Element | null = null;
    if (show) {
        element = <p>Párrafo 2</p>;
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle Show</button>
            {/* Ternario */}
            {show ?
                <p>Párrafo 1</p> :
                null
            }

            {/* Condicional previo */}
            {element}

            {/* Mediante && */}
            {show &&
                <>
                    <p>Párrafo 3</p>
                    <p>Párrafo 4</p>
                </>
            }

            {/* Mediante una función */}
            {(() => {
                if (show) {
                    return <p>Párrafo 5</p>;
                }
            })()}
        </div >
    )

}

export default Condicionales;