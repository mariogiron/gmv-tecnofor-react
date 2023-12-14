import { Outlet } from "react-router-dom";

const AdminLayout = () => {

    return (
        <div>
            <h2>Zona de ADMINISTRACIÓN</h2>
            <Outlet />
        </div>
    );
}

export default AdminLayout;