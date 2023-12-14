import { useContext } from "react";
import { UserContext } from "./Main";

const Profile = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <h3>Nombre usuario: {user.name}</h3>
        </div>
    )
}

export default Profile;