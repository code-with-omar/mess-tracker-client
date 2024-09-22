import { useState } from "react";
import useUsers from "../../../../Hooks/useUsers";
import useUserHistory from "../../../../Hooks/useUserHistory";
import useFindManagerHistory from "../../../../Hooks/useFindManagerHistory";
import useCookBill from "../../../../Hooks/useCookBill";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FinalCalculation = () => {
    const axiosSecure = useAxiosSecure();
    const [managerHistory, refetch] = useFindManagerHistory();
    const [cookBill] = useCookBill();
    const [users] = useUsers();
    const [userEmail, setUserEmail] = useState(null);
    const [deposit, meal] = useUserHistory(userEmail);

    const handleCalculation = async (email) => {
        await setUserEmail(email);

    };

    if (managerHistory && managerHistory.length > 0 && userEmail) {
        const managerData = managerHistory[0];
        const totalMeal = parseFloat(managerData.totalMeal);
        const totalCookBill = parseFloat(cookBill[0]?.cookBill || 0);

        const userCookBill = (totalCookBill / users.length).toFixed(2);
        const extraBazar = parseFloat((parseFloat(managerData.extraBazar) / users.length).toFixed(2));
        const mealRate = parseFloat(managerData.mealRate);

        if (deposit && meal) {
            const depositTotal = deposit.reduce((acc, item) => acc + parseFloat(item.money), 0) || 0;
            const userTotalMeal = meal.reduce((acc, item) => acc + parseFloat(item.meal), 0);
            const mealCost = userTotalMeal * mealRate;
            const totalUserCost = (mealCost + extraBazar + parseFloat(userCookBill)).toFixed(2);
            const dueAmount = (depositTotal - totalUserCost).toFixed(2);

            const userPerviousMonthHistory = {
                email: userEmail,
                depositTotal,
                userTotalMeal,
                totalCookBill,
                mealCost,
                totalUserCost,
                dueAmount,
            };

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, close it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.post("/userPreviousMonth", userPerviousMonthHistory).then((res) => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "User meal closed successfully.",
                                icon: "success",
                            });
                        }
                    });
                }
            });
        }
    }

    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">
                User Meal Close
            </h2>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* Table header */}
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
