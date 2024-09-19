import { Link, Outlet } from "react-router-dom";
import { IoMdHome, IoIosWallet } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { FaAd, FaCalendarAlt, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import useDate from "../Hooks/useDate";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useFindLastDate from "../Hooks/useFindLastDate";
import useAdmin from "../Hooks/useAdmin";
import useUsersFind from "../Hooks/useUsersFind";

// import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
    const lastDate = useFindLastDate()
    const { user, logOut } = useContext(AuthContext)
    const email = user.email
    const [isAdmin,] = useAdmin({ email })
    // const currentdate = moment().date()
    const currentDate = 30
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            });

    }
    const photo = user?.photoURL
   
    const date = useDate()
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Drawer Wrapper */}
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                {/* Main Content */}
                <div className="drawer-content flex-1 p-6 lg:px-20">
                    {/* Navbar / Drawer Toggle Button */}
                    <div className="w-full flex justify-between lg:hidden">
                        <label htmlFor="my-drawer" className="  drawer-button lg:hidden cursor-pointer text-green-500">
                            <PiHamburgerFill className="w-20 h-20" />
                        </label>
                        <h1 className="text-5xl font-bold ">Mess Tracker</h1>

                    </div>
                    <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold">{date}</h2>
                    <Outlet></Outlet>

                </div>

                {/* Sidebar / Drawer */}
                <aside className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <div className="w-64 p-5 text-white font-medium h-dvh bg-[#07332F]">
                        <h1 className="text-2xl font-bold mb-8 hidden lg:block">Mess Tracker</h1>
                        <ul className="uppercase">

                            <div className="flex justify-between">
                                <img src={photo} className="w-20 h-20 rounded-full" alt="" />
                                <button className="text-6xl text-yellow-400 font-extrabold" onClick={() => handleLogOut()}><BiLogOutCircle></BiLogOutCircle></button>

                            </div>
                            {isAdmin ?
                                <>
                                    <li className="mb-4">
                                        <Link to="/admin/home" className="flex items-center py-2 text-lg md:text-xl hover:text-white hover:transition-colors">
                                            <IoMdHome className="text-lg md:text-xl mr-2" />
                                            Manager Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/bazar" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaUtensils className="text-lg md:text-xl mr-2" />Bazzar Cost
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/admin/deposit" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaList className="text-lg md:text-xl mr-2" />Deposit
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/addMeals" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaAd className="text-lg md:text-xl mr-2" />Today's Meals
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/allMembers" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaUsers className="text-lg md:text-xl mr-2" />All Member
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/bazarDetails" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <MdOutlineRestaurantMenu className="text-lg md:text-xl mr-2" />Bazar Details
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/mealDetails" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <MdOutlineRestaurantMenu className="text-lg md:text-xl mr-2" />Meal details
                                        </Link>
                                    </li>
                                    {
                                        currentDate === lastDate ? <li className="mb-4">
                                            <Link to="/closeMangerActivity" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                                <MdOutlineRestaurantMenu className="text-lg md:text-xl mr-2" />Close Manager Activity
                                            </Link>
                                        </li>
                                            : <></>
                                    }
                                </>
                                :
                                <>
                                    <li className="mb-4">
                                        <Link to="#" className="flex items-center py-2 text-lg md:text-xl hover:text-white hover:transition-colors">
                                            <IoMdHome className="text-lg md:text-xl mr-2" />
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaCalendarAlt className="text-lg md:text-xl mr-2" /> Profile
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="#" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <IoIosWallet className="text-lg md:text-xl mr-2" />Meal details
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaShoppingCart className="text-lg md:text-xl mr-2" />Manager Review
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaShoppingCart className="text-lg md:text-xl mr-2" />All member information
                                        </Link>
                                    </li>

                                </>}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;