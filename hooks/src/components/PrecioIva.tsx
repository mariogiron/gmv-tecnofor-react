// import { useEffect, useState } from "react";

type PrecioIvaProps = { precio: number };

// const PrecioIva = ({ precio }: PrecioIvaProps) => {

//     const [precioIva, setPrecioIva] = useState(0);

//     useEffect(() => {
//         setPrecioIva(precio * 1.21);
//     }, []);

//     return <div>
//         <p>Precio: {precio}</p>
//         <p>Precio con IVA: {precioIva}</p>
//     </div>;
// }

const PrecioIva = ({ precio }: PrecioIvaProps) => {

    const precioIva = precio * 1.21;

    return <div>
        <p>Precio: {precio}</p>
        <p>Precio con IVA: {precioIva}</p>
    </div>;
}

export default PrecioIva;