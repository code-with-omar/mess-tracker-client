import moment from "moment";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";
import Swal from "sweetalert2";


const Deposit = () => {
    const [users] = useUsers();
    const axiosSecure = useAxiosSecure()
    const date = moment().format('L');
    const [month, day, year] = date.split('/');
    const handleDeposit = (e) => {
        e.preventDefault();
        const form = e.target;
        const taka = form.deposit.value;
        const email = form.email.value;
        const deposit = {
            email: email,
            money: taka,
            date: day,
            math: month
        }
        console.log(deposit)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Deposit"
        }).then((result) => {
            if (result.isConfirmed) {
               axiosSecure.post('/deposit',deposit)
               .then(response=>console.log(response))
                Swal.fire({
                    title: "Deleted!",
                    text: "Deposit success",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">Deposit</h2>
            {
                users.map((user, index) => (
                    <form onSubmit={handleDeposit} key={user._id}>
                        <div className="border-b-[.5px] border-[#E8E8E8] flex justify-between items-center py-4 space-x-4">
                            <h2 className="text-center  text-[#07332F]  text-base md:text-lg ">{index + 1}</h2>
                            <h2 className=" flex-1 text-center text-[#07332F] text-base md:text-lg ">{user.name}</h2>
                            <input
                                name="deposit"
                                className="px-4 w-1/4 md:w-1/2  py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  md:text-lg"
                                type="text"
                                placeholder="Add Deposit"
                                required
                            />
                            <input
                                name="email"
                                type="hidden"
                                defaultValue={user.email}
                            />
                            <button
                                type="submit"
                                className="btn btn-success px-4 py-2 rounded-lg bg-gray-100 border border-gray-200  font-medium focus:outline-none focus:border-gray-400 focus:bg-white text-base md:text-lg"
                            >
                                DEPOSIT
                            </button>
                        </div>
                    </form>
                ))
            }
        </div>
    );
};

export default Deposit;