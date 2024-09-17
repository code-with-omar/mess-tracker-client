import { TbCoinTakaFilled } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import useFindAllMeals from "../../../Hooks/useFindAllMeals";
import useFindDeposit from "../../../Hooks/useFindDeposit";
import useBazar from "../../../Hooks/useBazar";

const AdminHome = () => {
    const [allMeals] = useFindAllMeals();
    const [allDeposit] = useFindDeposit();
    const [bazar] = useBazar()
    const totalMeal = allMeals.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    const totalDeposit = allDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0);
    const totalBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.bazar), 0);
    const extraBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.extra), 0);

    const mealRate = (totalBazar / totalMeal).toFixed(2)
    const dueAmount = totalDeposit - (totalBazar + extraBazar)

    return (
        <div>
            <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#25ff00]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Deposit</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-7xl" />
                        <span className="text-5xl font-extrabold">{totalDeposit} taka</span>
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-white">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Bazar</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl" />
                        <span className="text-5xl font-extrabold">{totalBazar} taka</span>
                    </div>
                </div>
                <div className="border-b-2 py-5 px-5 text-[#0097ff]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Extra</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl" />
                        <span className="text-5xl font-extrabold">{extraBazar} taka</span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 bg-[#0f1729]">
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#9b8fcd]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Total Meal</h2>
                    <div className="flex justify-between items-center">
                        <MdFoodBank className="text-8xl" />
                        <span className="text-5xl font-extrabold">{totalMeal} Unit</span>
                    </div>
                </div>
                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Meal Rate</h2>
                    <div className="flex justify-between items-center">
                        <MdFoodBank className="text-8xl" />
                        <span className="text-5xl font-extrabold"> {mealRate} taka</span>
                    </div>
                </div>
                <div className="py-5 px-5 text-[#ffb80a]">
                    <h2 className="text-4xl font-extrabold text-center mb-5">Due Amount</h2>
                    <div className="flex justify-between items-center">
                        <TbCoinTakaFilled className="text-8xl" />
                        <span className="text-5xl font-extrabold">{dueAmount} taka</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
