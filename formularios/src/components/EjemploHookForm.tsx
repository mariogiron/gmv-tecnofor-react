import { useForm } from "react-hook-form";

type FormValues = {
    email: string,
    password: string
}

const EjemploHookForm = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();

    const onSubmit = (values: FormValues) => {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', { required: true })} />
                {errors.email && <p>El campo email es incorrecto</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register('password', { minLength: 8 })} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    );

}

export default EjemploHookForm;