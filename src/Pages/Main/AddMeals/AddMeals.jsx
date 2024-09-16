import moment from "moment";
import useUsers from "../../../Hooks/useUsers";

const AddMeals = () => {
    const [users] = useUsers();
    const date = moment().format('L'); // "09/16/2024"
    const [month, day, year] = date.split('/');

    const handleMeal = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const form = e.target;
        const meal = form.meal.value;
        const email = form.email.value;
        console.log(meal, email);

    };

    return (
        <div>
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">Submit Today's meal for individual member</h2>
            {
                users.map((user, index) => (
                    <form onSubmit={handleMeal} key={user._id}>
                        <div className="border-b-[.5px] border-[#E8E8E8] flex justify-between items-center py-4 space-x-4">
                            <h2 className="text-center  text-[#07332F]  text-base md:text-lg ">{index + 1}</h2>
                            <h2 className=" flex-1 text-center text-[#07332F] text-base md:text-lg ">{user.name}</h2>
                            <input
                                name="meal"
                                className="px-4 w-1/4 md:w-1/2  py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  md:text-lg"
                                type="text"
                                placeholder="Add meals"
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
                                Add meal
                            </button>
                        </div>
                    </form>
                ))
            }
        </div>
    );
};

export default AddMeals;
