import { IoIosCloseCircleOutline } from "react-icons/io";
import useCalculation from "../../../Hooks/useCalculation";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { GiCook, GiHotMeal } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import { useEffect, useState } from "react";
import useFindLastDate from "../../../Hooks/useFindLastDate";
import moment from "moment";
import useUsers from "../../../Hooks/useUsers";
import { TbCoinTakaFilled } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { AiOutlineUnderline } from "react-icons/ai";

const CloseManagerActivity = () => {
    const [closeManager, setCloseManager] = useState(false)

    const { totalMeal, totalDeposit, totalBazar, extraBazar, mealRate, dueAmount } = useCalculation();
    const axiosSecure = useAxiosSecure();
    const [users, refetch] = useUsers()
    // const lastDate = useFindLastDate()
    const lastDate = 30
    const currentDate = 30
    // const currentDate = moment().date()
    // const dueDay = lastDate - currentDate
    const dueDay = 10
    useEffect(() => {
        axiosSecure.get('/closeManagerHistory')
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data)
                    setCloseManager(true)

                }

            })
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
                        refetch()

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
                            setCloseManager(true)
                            Swal.fire({
                                title: "Success!",
                                text: "Close Manager Activity Added Successfully",
                                icon: "success",
                            });

                        }

                        console.log(closeManager)

                    })
                    .catch(err => console.error(err)); // Handle errors

            }
            refetch()
        });
    };

    return (
        <div>
            {
                    lastDate == currentDate && closeManager === false ? (
                        <>
                            <h2 className="mt-3 text-lg text-green-400 font-bold md:text-2xl text-center">
                                Congratulations! You've Completed Your Month Successfully!
                            </h2>
                            <FcBusinessman className="w-32 h-32 mx-auto" />
                            <div className="grid md:grid-cols-2 bg-[#0f1729] my-0 md:my-10">
                                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ff00d3]">
                                    <h2 className="text-4xl font-extrabold text-center mb-5">Cook Bill</h2>
                                    <div className="flex justify-center items-center font-extrabold text-7xl mb-5 text-white">
                                        <GiCook />
                                    </div>
                                    <div>
                                        <form onSubmit={handleCookBill} className="w-full grid gap-x-2 grid-flow-col">
                                            <input
                                                type="text"
                                                name="cookBill"
                                                className="px-8 py-4 mt-5 rounded-lg bg-gray-100 border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white text-black"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="mt-5 bg-[#163240] text-white-500 py-4 rounded-lg px-4 hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
                                            >
                                                <span className="text-white">Submit</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="border-b-2 md:border-r-2 py-5 px-5 text-[#ffb80a]">
                                    <h2 className="text-4xl font-extrabold text-center mb-5">Close Manager</h2>
                                    <div className="flex justify-center items-center font-extrabold text-7xl mb-5 text-[#e65622]">
                                        <IoIosCloseCircleOutline />
                                    </div>
                                    <div className="mt-5">
                                        <form onSubmit={onHandleCloseManager} className="w-full">
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
                    ) : (
                        <div>
                            {/* {dueDay > 0 && (
                                <h2 className="text-center text-warning mt-5 font-bold text-lg md:text-xl lg:text-2xl">
                                    After {dueDay} days, your manager post will be finished.
                                </h2>
                            )} */}
                        </div>
                    )
                
            }


            {
                closeManager === true ?
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
                    :
                    <></>
            }

        </div>


    );
};

export default CloseManagerActivity;
