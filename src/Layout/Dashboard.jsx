import { Link, Outlet } from "react-router-dom";
import { IoMdHome, IoIosWallet } from "react-icons/io";
import { FaAd, FaCalendarAlt, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { LuCalendarClock } from "react-icons/lu";
import { GiHamburgerMenu, } from "react-icons/gi";
import { MdOutlineRestaurantMenu, MdShoppingBag } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { PiHamburgerFill } from "react-icons/pi";
// import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
    // const [isAdmin] = useAdmin()
    const isAdmin = true
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
                        <h1 className="text-5xl font-bold ">BISTRO BOSS</h1>
                    </div>

                    <Outlet></Outlet>
                </div>

                {/* Sidebar / Drawer */}
                <aside className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <div className="w-64 p-5 text-slate-800 font-medium h-dvh bg-[#D1A054]">
                        <h1 className="text-2xl font-bold mb-8 hidden lg:block">BISTRO BOSS</h1>
                        <ul className="uppercase">
                            {isAdmin ?
                                <>
                                    <li className="mb-4">
                                        <Link to="#" className="flex items-center py-2 text-lg md:text-xl hover:text-white hover:transition-colors">
                                            <IoMdHome className="text-lg md:text-xl mr-2" />
                                            Admin Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/addItem" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaUtensils className="text-lg md:text-xl mr-2" /> Add Item
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/manageItem" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaList className="text-lg md:text-xl mr-2" />manage orders
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="#" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaAd className="text-lg md:text-xl mr-2" />Manage bookings
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/allusers" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaUsers className="text-lg md:text-xl mr-2" />all users
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/allmenus" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <MdOutlineRestaurantMenu className="text-lg md:text-xl mr-2" />all menus
                                        </Link>
                                    </li>
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
                                        <Link to="/dashboard/addReservation" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaCalendarAlt className="text-lg md:text-xl mr-2" /> Reservation
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="#" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <IoIosWallet className="text-lg md:text-xl mr-2" />Payment History
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/cart" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <FaShoppingCart className="text-lg md:text-xl mr-2" />My Cart
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/dashboard/addReview" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colorss">
                                            <VscFeedback className="text-lg md:text-xl mr-2" />Add Review
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/findReservation" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                            <LuCalendarClock className="text-lg md:text-xl mr-2" />My Booking
                                        </Link>
                                    </li>
                                </>}

                            <div className="divider divider-neutral"></div>
                            <li>
                                <Link to="/" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors"><IoMdHome className="text-white"></IoMdHome>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menus" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                    <GiHamburgerMenu className="text-lg md:text-xl mr-2"></GiHamburgerMenu>Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                    <MdShoppingBag className="text-lg md:text-xl mr-2"></MdShoppingBag>Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="flex py-2 text-lg md:text-xl items-center hover:text-white hover:transition-colors">
                                    <HiMail className="text-lg md:text-xl mr-2" />Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;