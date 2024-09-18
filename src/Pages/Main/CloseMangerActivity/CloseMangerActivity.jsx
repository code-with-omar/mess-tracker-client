import { GiCook } from "react-icons/gi";
import useCalculation from "../../../Hooks/useCalculation";
import AdminHome from "../AdminHome/AdminHome";
import { AiOutlineUnderline } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { TbCoinTakaFilled } from "react-icons/tb";
import useUsers from "../../../Hooks/useUsers";

const CloseMangerActivity = () => {
    const [users,] = useUsers()
    const { totalMeal, totalDeposit, totalBazar, extraBazar, mealRate, dueAmount } = useCalculation()
    const individualExtra = parseFloat(extraBazar / users.length).toFixed(2);
    return (
        <div>
            <AdminHome></AdminHome>
            <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#9b8fcd]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Per Person extra </h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#d2ff11]">

                        <TbCoinTakaFilled />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-center font-extrabold">{individualExtra}</span>
                        <AiOutlineUnderline />
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Cook bill</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-white">

                        <GiCook />
                    </div>
                    <div className="">
                        <form action="" className="w-full grid gap-x-2 grid-flow-col">
                            <input type="text" className="px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black" />
                            <button className="mt-5 tracking-wide font-semibold bg-[#163240] text-white-500  py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                <span className="text-white">Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5  text-[#ffb80a]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Close Manager</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#e65622]">

                        <IoIosCloseCircleOutline />
                    </div>
                    <div className="mt-5">
                        <form action="" className="w-full">
                            <button className="mt-5 w-full tracking-wide font-semibold bg-red-950 text-white-500  py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                <span className="text-white font-bold">Close</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloseMangerActivity;