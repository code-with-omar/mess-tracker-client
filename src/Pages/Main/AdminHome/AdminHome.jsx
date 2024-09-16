import { TbCoinTakaFilled } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import useFindAllMeals from "../../../Hooks/useFindAllMeals";

const AdminHome = () => {
    const [allMeals]=useFindAllMeals()
    const totalMeal = allMeals.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
  
    return (
        <div>
            <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                <div className="border-b-2 md:border-r-2  py-5 px-5 text-[#25ff00]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Deposit</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl "></TbCoinTakaFilled>
                        <span className="text-5xl font-extrabold">120 taka</span>
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2  py-5 px-5 text-white">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total bazar</h2>
                    <div className="flex justify-between items-center">
                    <TbCoinTakaFilled className="text-8xl "></TbCoinTakaFilled>
                    <span className="text-5xl font-extrabold">120 taka</span>
                    </div>
                </div>
                <div className="border-b-2 py-5 px-5 text-[#0097ff]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Extra</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl "></TbCoinTakaFilled>
                        <span className="text-5xl font-extrabold">120 taka</span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 bg-[#0f1729]">
                <div className="border-b-2 md:border-r-2  py-5 px-5 text-[#9b8fcd]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total meal</h2>
                    <div className="flex justify-between items-center">
                        <MdFoodBank className="text-8xl "></MdFoodBank> <span className="text-5xl font-extrabold">{totalMeal} Unit</span>
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2  py-5 px-5 text-[#ff00d3]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Meal rate</h2>
                    <div className="flex justify-between items-center">
                        <MdFoodBank className="text-8xl "></MdFoodBank>
                        <span className="text-5xl font-extrabold">120 taka</span>
                    </div>
                </div>
                <div className=" py-5 px-5 text-[#ffb80a]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Deu amount</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl "></TbCoinTakaFilled>
                        <span className="text-5xl font-extrabold">120 taka</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;