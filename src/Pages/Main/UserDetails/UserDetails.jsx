import { useParams } from "react-router-dom";
import useUsersMeals from "../../../Hooks/useUsersMeals";
import useUsersDeposit from "../../../Hooks/useUsersDeposit";
import useCalculation from "../../../Hooks/useCalculation";
import useUsersFind from "../../../Hooks/useUsersFind";
import { TbCoinTakaFilled } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";
import { AiOutlineUnderline } from "react-icons/ai";
import useUsers from "../../../Hooks/useUsers";

const UserDetails = () => {
    const { email } = useParams()
    const [usersMeal, refetch] = useUsersMeals({ email })
    const [usersDeposit,] = useUsersDeposit({ email })
    const [usersFind,] = useUsersFind({ email })
    const [users,] = useUsers()
    const { extraBazar, mealRate } = useCalculation()
    console.log(mealRate)
    const totalUserMeals = usersMeal.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    const totalUserDeposit = usersDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0) || 0
    const allUsers = users.length
    const extraTakaForIndividualMember = parseFloat(extraBazar / allUsers).toFixed(2)
    const totalMealCost = parseFloat((mealRate * totalUserMeals)).toFixed(2);
    const totalCost = parseFloat(totalMealCost) + parseFloat(extraTakaForIndividualMember)
    const dueAmount = (totalUserDeposit - totalCost).toFixed(2)
    // console.log(totalMealCost)
    const { name, department, district, photoURL } = usersFind?.[0] || {};
    // console.log({ name, department, district, photoURL })
    return (

        <div>
            {
                photoURL ?
                    <>
                        <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 mt-5 md:mt-10">
                            {/* Image Section */}
                            <div className="w-32 h-32  bg-gray-200 rounded-2xl md:w-48 md:h-48 lg:w-52 lg:h-52 mr-0 md:mr-10">
                                <img className="rounded-2xl w-full h-full" src={photoURL} alt="" />
                            </div>

                            {/* Info Section */}
                            <div className="flex-1 ">
                                <h2 className="text-xl font-bold text-[#0A0808] my-1 uppercase">Name : {name}</h2>
                                <h2 className="text-[#1a0746] my-4 font-medium text-lg uppercase">Department : {department}</h2>
                                <h2 className="text-[#1a0746] my-4 font-medium text-lg uppercase">district : {district}</h2>
                                <h2 className="text-[#1a0746] my-4 font-medium text-lg uppercase">Country : Bangladesh</h2>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#25ff00]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Total Deposit</h2>
                                <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#c3ff5c]">

                                    <CiBank />
                                </div>
                                <div className="flex justify-center items-center text-5xl">
                                    <span className="text-center font-extrabold">{totalUserDeposit}</span>
                                    <TbCoinTakaFilled />
                                </div>
                            </div>
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-white">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Total meals</h2>
                                <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#c3ff5c]">

                                    <GiHotMeal />
                                </div>
                                <div className="flex justify-center items-center text-5xl">
                                    <span className="text-5xl font-extrabold">{totalUserMeals}</span>
                                    <AiOutlineUnderline />
                                </div>
                            </div>
                            <div className="border-b-2 md:border-r-2 py-5 px-5  text-[#0097ff]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Extra</h2>
                                <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#53ff3f]">

                                    <CiBank />
                                </div>
                                <div className="flex justify-center items-center text-5xl">
                                    <span className="text-center font-extrabold">{extraTakaForIndividualMember}</span>
                                    <TbCoinTakaFilled />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 bg-[#0f1729] my-0 md:my-10">
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#9b8fcd]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Total Meal Cost</h2>
                                <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-[#d2ff11]">

                                    <CiBank />
                                </div>
                                <div className="flex justify-center items-center text-5xl">
                                    <span className="text-center font-extrabold">{totalMealCost}</span>
                                    <TbCoinTakaFilled />
                                </div>
                            </div>
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Total cost</h2>
                                <div className="flex justify-center items-center font-extrabold  text-7xl mb-5 text-white">

                                    <CiBank />
                                </div>
                                <div className="flex justify-center items-center text-5xl">
                                    <span className="text-5xl font-extrabold">{totalCost}</span>
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
                    </>
                    :
                    <h2>Loading Data....</h2>
            }
        </div >
    );
};

export default UserDetails;