import { TbCoinTakaFilled } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
// import useFindAllMeals from "../../../Hooks/useFindAllMeals";
// import useFindDeposit from "../../../Hooks/useFindDeposit";
// import useBazar from "../../../Hooks/useBazar";
import useCalculation from "../../../Hooks/useCalculation";
import { CiBank } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";
import { AiOutlineUnderline } from "react-icons/ai";

const AdminHome = () => {
    // const [allMeals] = useFindAllMeals();
    // const [allDeposit] = useFindDeposit();
    // const [bazar] = useBazar()
    // const totalMeal = allMeals.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    // const totalDeposit = allDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0);
    // const totalBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.bazar), 0);
    // const extraBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.extra), 0);

    // const mealRate = (totalBazar / totalMeal).toFixed(2)
    // const dueAmount = totalDeposit - (totalBazar + extraBazar)
    const { totalMeal, totalDeposit, totalBazar, extraBazar, mealRate, dueAmount } = useCalculation()

    return (
        <div>
            <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#25ff00]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Deposit</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#c3ff5c]">

                        <CiBank />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-center font-extrabold">{totalDeposit}</span>
                        <TbCoinTakaFilled />
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-white">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Bazar</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#c3ff5c]">

                        <CiBank />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-5xl font-extrabold">{totalBazar}</span>
                        <TbCoinTakaFilled />
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5  text-[#0097ff]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Extra</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#53ff3f]">

                        <CiBank />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-center font-extrabold">{extraBazar}</span>
                        <TbCoinTakaFilled />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#9b8fcd]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Meal</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#d2ff11]">

                        <GiHotMeal />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-center font-extrabold">{totalMeal}</span>
                        <AiOutlineUnderline />
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Meal Rate</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-white">

                        <CiBank />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-5xl font-extrabold">{mealRate}</span>
                        <TbCoinTakaFilled />
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5  text-[#ffb80a]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Current Status</h2>
                    <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#e65622]">

                        <CiBank />
                    </div>
                    <div className="flex justify-center items-center text-5xl">
                        <span className="text-center font-extrabold">{dueAmount}</span>
                        <TbCoinTakaFilled />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
