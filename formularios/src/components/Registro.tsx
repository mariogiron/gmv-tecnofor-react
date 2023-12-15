import { ChangeEventHandler, FormEvent } from "react";
import useFormFields from "../hooks/useFormFields";

type CustomInputProps = { type?: string, value: string, name: string, placeholder?: string, onChange: ChangeEventHandler, label?: string }

const CustomInput = (
    { type = 'text', value, name, placeholder = '', onChange, label }: CustomInputProps
) => {

    return (
        <div>
            <label>{label || name}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

const Registro = () => {

    const [fields, handleChange] = useFormFields(
        { nombre: '', apellidos: '', direccion: '', email: '' }
    );

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(fields);
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={fields.nombre}
                    onChange={handleChange}
                />
            </div> */}
            <CustomInput label="Nombre" name="nombre" value={fields.nombre} onChange={handleChange} placeholder="Introduce el nombre" />
            <div>
                <label>Apellidos</label>
                <input
                    type="text"
                    name="apellidos"
                    value={fields.apellidos}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    value={fields.direccion}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Registro;