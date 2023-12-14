import { ChangeEvent, createContext, useState } from "react";
import Profile from "./Profile";

export const UserContext = createContext<{ name: string }>({ name: '' })

const Main = () => {

    const [currentUser, setCurrentUser] = useState({
        name: 'Prueba'
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentUser({
            name: event.currentTarget.value
        });
    }

    return (
        <UserContext.Provider value={currentUser}>
            <div>
                <Profile />
            </div>
            <div>
                <label>Nombre usuario</label>
                <input type="text" onChange={handleChange} />
            </div>
        </UserContext.Provider>
    )
}

export default Main;