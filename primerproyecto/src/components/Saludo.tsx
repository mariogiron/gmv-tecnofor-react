type SaludoProps = { nombre: string };

const Saludo = ({ nombre }: SaludoProps) => {

    return (
        <div>
            <p>Este es el saludo</p>
            <p>Hola {nombre}</p>
        </div>
    );

}

export default Saludo;
