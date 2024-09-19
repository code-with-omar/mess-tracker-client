import { IoIosCloseCircleOutline } from "react-icons/io";
import useCalculation from "../../../Hooks/useCalculation";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { GiCook } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import { useEffect, useState } from "react";
import useFindLastDate from "../../../Hooks/useFindLastDate";
import moment from "moment";

const CloseManagerActivity = () => {
    const [cookBillCheck, setCookBillCheck] = useState(null);
    const { totalMeal, totalDeposit, totalBazar, extraBazar, mealRate, dueAmount } = useCalculation();
    const axiosSecure = useAxiosSecure();
    // const lastDate = useFindLastDate()
    const lastDate = 30
    const currentDate = 30
    // const currentDate = moment().date()
    // const dueDay = lastDate - currentDate
    useEffect(() => {
        axiosSecure.get('/cookBill')
            .then(res => setCookBillCheck(res.data))
            .catch(err => console.error(err)); // Handle errors
    }, [axiosSecure]);
    const handleCookBill = (e) => {
        e.preventDefault();
        const form = e.target;
        const cookBill = form.cookBill.value;
        const cookBillInput = { cookBill };

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Are you Sure"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/cookBill', cookBillInput)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "Cook Bill Added Successfully",
                                icon: "success"
                            });
                        }
                        form.reset();

                    })
                    .catch(err => console.error(err)); // Handle errors
            }
        });
    };
    const onHandleCloseManager = (e) => {
        e.preventDefault();
        const storeHistory = {
            totalMeal,
            totalDeposit,
            totalBazar,
            extraBazar,
            mealRate,
            dueAmount,
        };
        console.log(storeHistory)
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
                axiosSecure.post('/closeManagerHistory', storeHistory)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "Close Manager Activity Added Successfully",
                                icon: "success",
                            });
                        }

                    })
                    .catch(err => console.error(err)); // Handle errors
            }
        });
    };

    return (
        <div>
            {
                lastDate == currentDate
                    ?
                    <>
                        <h2 className="mt-3 text-lg text-green-400 font-bold md:text-2xl text-center">Congratulation ! You Complete Your Month Properly</h2>
                        <FcBusinessman className="w-32 h-32 mx-auto"/>
                        <div className="grid md:grid-cols-2 bg-[#0f1729] my-0 md:my-10">
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Cook Bill</h2>
                                <div className="flex justify-center items-center font-extrabold text-7xl mb-5 text-white">
                                    <GiCook />
                                </div>
                                <div>
                                    {cookBillCheck && cookBillCheck.length > 0 ? (
                                        <form onSubmit={handleCookBill} className="w-full grid gap-x-2 grid-flow-col">
                                            <input type="text" name="cookBill" className="px-8 py-4 mt-5 rounded-lg bg-gray-100 border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white text-black disabled" disabled required />
                                            <button type="submit" className="mt-5 bg-[#163240] text-white-500 py-4 rounded-lg px-4 hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none" disabled>
                                                <span className="text-white" disabled>Submit</span>
                                            </button>
                                        </form>
                                    ) : (
                                        <form onSubmit={handleCookBill} className="w-full grid gap-x-2 grid-flow-col">
                                            <input type="text" name="cookBill" className="px-8 py-4 mt-5 rounded-lg bg-gray-100 border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white text-black" required />
                                            <button type="submit" className="mt-5 bg-[#163240] text-white-500 py-4 rounded-lg px-4 hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none">
                                                <span className="text-white">Submit</span>
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                            <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ffb80a]">
                                <h2 className="text-4xl font-extrabold text-center mb-5">Close Manager</h2>
                                <div className="flex justify-center items-center font-extrabold text-7xl mb-5 text-[#e65622]">
                                    <IoIosCloseCircleOutline />
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={onHandleCloseManager} className="w-full"> {/* Changed onClick to onSubmit */}
                                        <button
                                            type="submit"
                                            className="mt-5 w-full bg-red-950 text-white-500 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
                                        >
                                            <span className="text-white font-bold">Close</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div>
                        <h2 className="text-center text-warning mt-5 font-bold text-lg md:text-xl lg:text-2xl">After {dueDay} day's later your manager post will be finished</h2>

                    </div>
            }

        </div>


    );
};

export default CloseManagerActivity;
