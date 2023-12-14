import { Navigate, Outlet } from "react-router-dom";

type AuthGuardProps = { isAllowed: boolean, redirectPath?: string }

const AuthGuard = ({ isAllowed, redirectPath = '/login' }: AuthGuardProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default AuthGuard;