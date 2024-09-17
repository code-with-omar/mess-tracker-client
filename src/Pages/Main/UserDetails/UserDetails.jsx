import { useParams } from "react-router-dom";
import useUsersMeals from "../../../Hooks/useUsersMeals";
import useUsersDeposit from "../../../Hooks/useUsersDeposit";
import useCalculation from "../../../Hooks/useCalculation";
import useUsersFind from "../../../Hooks/useUsersFind";

const UserDetails = () => {
    const { email } = useParams()
    const [usersMeal, refetch] = useUsersMeals({ email })
    const [usersDeposit,] = useUsersDeposit({ email })
    const [usersFind,] = useUsersFind({ email })
    const totalUserMeals = usersMeal.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    const tatalUserDeposit = usersDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0) || 0
    const { extraBazar, mealRate } = useCalculation()
    const { name, department, district, photoURL } = usersFind?.[0] || {};
    console.log({ name, department, district, photoURL })
    return (

        <div>
            {
                photoURL ?
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
                    
                    :
                    <h2>Loading Data....</h2>
            }
        </div>
    );
};

export default UserDetails;