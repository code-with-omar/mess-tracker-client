import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <div className="grid grid-flow-col place-items-center h-screen w-full mx-auto bg-white">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-around">
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    <span className="loading loading-spinner text-success"></span>
                    <span className="loading loading-spinner text-warning"></span>
                    <span className="loading loading-spinner text-error"></span>
                </div>
            </div>

        )
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;