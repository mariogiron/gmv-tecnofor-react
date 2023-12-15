import { useEffect, useState } from "react";
import { User } from "../interfaces/User";

const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);

    // useEffect(() => {
    //     fetch('https://peticiones.online/api/users')
    //         .then(response => response.json())
    //         .then(data => setUsers(data.results));
    // }, []);

    // Petición GET con fetch
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://peticiones.online/api/users');
            const data = await response.json();
            setUsers(data.results);
        }
        getData();
    }, []);

    useEffect(() => {
        async function sendData() {
            const body = { first_name: 'Lorenzo', last_name: 'Romero', email: 'lorenzo@gmail.com', username: 'loren', password: '12345' };

            const response = await fetch('https://peticiones.online/api/users', {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(body)
            });
            const data = await response.json();
            console.log(data);
        }
        sendData();
    }, []);

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <div className="users">
                {users.map(user => (
                    <div key={user._id} className="user">
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>Email: {user.email}</p>
                        <img src={user.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default UserList;