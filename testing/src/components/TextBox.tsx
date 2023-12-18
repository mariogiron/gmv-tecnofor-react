import { useState } from "react";

const TextBox = () => {

    const [bgColor, setBgColor] = useState('dodgerblue');

    return (
        <div>
            <article
                title="artículo principal"
                style={{
                    backgroundColor: bgColor
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus?
            </article>
            <button onClick={() => setBgColor('tomato')}>
                Pulsa para cambiar color
            </button>
        </div>
    );
}

export default TextBox;