import React from "react";

class Despedida extends React.Component<{ nombre: string }>{

    render() {
        return <div>
            <p>Esta es la despedida</p>
            <p>Nombre: {this.props.nombre}</p>
        </div>
    }

}

export default Despedida;