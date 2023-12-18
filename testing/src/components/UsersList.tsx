import { useEffect, useState } from "react";

const UsersList = () => {

    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        fetch('https://peticiones.online/api/users')
            .then(response => response.json())
            .then(response => {
                console.log(response.results);
                setUsers(response.results)
            })
    }, []);

    return (
        <div>
            {users.length > 0 && users.map((user: any) => (
                <p>{user.first_name}</p>
            ))}
        </div>
    );
}

export default UsersList;