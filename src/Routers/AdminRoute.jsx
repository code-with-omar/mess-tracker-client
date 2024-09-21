import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Handle cases where the user or email is not defined yet
    const email = user?.email;
    const { isAdmin, isAdminLoading } = useAdmin({ email });

    if (loading || isAdminLoading) {
        return (
            <div className="grid place-items-center h-screen">
                <progress className="progress w-56"></progress>
                <p className="mt-4 text-lg">Loading admin privileges...</p>
            </div>
        );
    }

    // If user exists and is an admin, render the child components
    if (user && isAdmin) {
        return children;
    }

    // If not an admin or not logged in, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
