import { useState } from "react";
import useUsers from "../../../../Hooks/useUsers";
import useUserHistory from "../../../../Hooks/useUserHistory";
import useFindManagerHistory from "../../../../Hooks/useFindManagerHistory";
import useCookBill from "../../../../Hooks/useCookBill";

const FinalCalculation = () => {
    const [managerHistory, refetch] = useFindManagerHistory();
    const [cookBill,] = useCookBill()

    const [users] = useUsers();
    const [userEmail, setUserEmail] = useState(null);
    const [deposit, meal] = useUserHistory(userEmail);
    const managerData = managerHistory && managerHistory[0];
    if (managerData) {
        const totalMeal = parseFloat(managerData.totalMeal);
        const totalCookBill = parseFloat(cookBill[0].cookBill)

        const userCookBill = (totalCookBill / users.length).toFixed(2)
        const extraBazar = parseFloat((parseFloat(managerData.extraBazar) / users.length).toFixed(2));
        const mealRate = parseFloat(managerData.mealRate);
        console.log({ mealRate });

        if (deposit && meal) {
            console.log({ totalCookBill })
            console.log({ extraBazar })
            console.log({ mealRate });
            const depositTotal = deposit.reduce((acc, item) => acc + parseFloat(item.money), 0) || 0;
            console.log({ depositTotal })
            const userTotalMeal = meal.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
            console.log({ userTotalMeal })
            const mealCost = userTotalMeal * mealRate;
            console.log({ mealCost })
            const totalUserCost = (mealCost + extraBazar + parseFloat(userCookBill)).toFixed(2);
            console.log({ totalUserCost })
            const dueAmount = (depositTotal - totalUserCost).toFixed(2)
            console.log({ dueAmount })


        }
    }

    const handleCalculation = (email) => {
        setUserEmail(email);
    };

    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">
                User Meal Close
            </h2>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Name</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {users.map((user, index) => (
                            <tr key={user?._id} className="border-b-[.5px] border-[#E8E8E8]">
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleCalculation(user.email)}
                                        type="button"
                                        className="btn btn-success px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 font-medium focus:outline-none focus:border-gray-400 focus:bg-white text-base md:text-lg"
                                    >
                                        Close
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinalCalculation;
