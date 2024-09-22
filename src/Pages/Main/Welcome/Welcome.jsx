import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Welcome = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="w-1/2 md:w-1/4">
                <img src={user.photoURL} className=" rounded-full" alt="User Avatar" />
            </div>
            <h2 className="text-base md:text-3xl lg:text-3xl mt-4 text-violet-900 font-semibold">Hello! <span className="text-emerald-950 font-bold">{user.displayName}</span> welcome to <span className="text-teal-900">Mess Tracker</span></h2>
        </div>
    );
};

export default Welcome;
