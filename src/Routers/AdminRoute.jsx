import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const email=user.email;
    const [isAdmin, isAdminLoading] = useAdmin({email})
    const location = useLocation()
    if (loading || isAdminLoading) {
        return (
            <div className="grid grid-flow-col place-items-center h-screen w-1/6 mx-auto">
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;