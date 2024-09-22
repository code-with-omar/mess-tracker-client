import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import moment from "moment";

const AddBazar = () => {
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();
    const axiosSecure = useAxiosSecure()
    const date = moment().format('L'); 
    const [month, day, year] = date.split('/');
    
    const onSubmit = async (e) => {

        const bazarCost = {
            name: e.name,
            bazar: e.bazar,
            details: e.details,
            extra: e.extra,
            bazarDate: day

        }
        console.log(bazarCost)
        const res = await axiosSecure.post('/bazar', bazarCost)
        if(res.data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Meal add success",
                showConfirmButton: false,
                timer: 1500
              });
              reset()
        }
    }
    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">Today's Bazar</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="">
                        <label className="text-black text-lg font-semibold">Name</label>
                        <input {...register("name")}
                            className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder="User Name"
                            required
                        />
                    </div>

                    <div className="mt-3">
                        <label className="text-black text-lg font-semibold">Amount</label>
                        <input {...register("bazar")}
                            className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder="Amount"
                            required
                        />
                    </div>

                    <div className="mt-3">
                        <label className="text-black text-lg font-semibold">Details</label>
                        <textarea {...register("details")}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="Details of bazar"
                            required>

                        </textarea>
                    </div>
                    <div className="mt-3">
                        <label className="text-black text-lg font-semibold">extra</label>
                        <input {...register("extra")}
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="Extra"
                            required
                        />
                    </div>

                    <button type="submit" className="mt-5 tracking-wide font-semibold bg-[#2c1580] text-white w-full py-4 rounded-l transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <span className="ml-2">Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBazar;