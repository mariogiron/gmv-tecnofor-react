import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return (
        <div>
            <h2 style={{ color: 'dodgerblue' }}>Páginas de autenticación</h2>
            <Outlet />
        </div>
    );
}

export default AuthLayout;