import { ChangeEvent, FormEvent, useState } from "react";

export interface User {
    username: string;
    email: string;
    password: string;
}

type FormularioProps = { onCreateUser: (newUser: User) => void }

const Formulario = ({ onCreateUser }: FormularioProps) => {

    const [user, setUser] = useState<User>({
        username: '', email: '', password: ''
    });

    const handleChangeField = (
        event: ChangeEvent<HTMLInputElement>,
        // fieldName: 'username' | 'email' | 'password'
        fieldName: keyof User
    ) => {
        // const userCopy = { ...user };
        // userCopy[fieldName] = event.currentTarget.value;
        // setUser(userCopy);

        setUser({
            ...user,
            [fieldName]: event.currentTarget.value
        });
    }

    // const handleChangeFieldV2 = (event: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    //     return (event: ChangeEvent<HTMLInputElement>) => {

    //     }
    // }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onCreateUser(user);
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={
                        (e: ChangeEvent<HTMLInputElement>) => handleChangeField(e, 'username')
                    } />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={
                        (e: ChangeEvent<HTMLInputElement>) => handleChangeField(e, 'email')
                    } />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={
                        (e: ChangeEvent<HTMLInputElement>) => handleChangeField(e, 'password')
                    } />
                </div>
                <input type="submit" value="Enviar" />
            </form>
            <div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
            </div>
        </>
    );

}

export default Formulario;