import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useUsers from "../../../Hooks/useUsers";
import { Link } from "react-router-dom";

const AllMembers = () => {
    const [users] = useUsers()
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Member: {users.length}</h2>



            </div>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Name</th>
                            <th>Rule</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="border-b-[.5px] border-[#E8E8E8]">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>

                                    <td>Admin</td>
                                    <td className="text-right">
                                        <Link to={`/details/${user.email}`}>
                                            <button
                                                type="submit"
                                                className="btn btn-success px-4 py-2 rounded-lg bg-gray-100 border border-gray-200  font-medium focus:outline-none focus:border-gray-400 focus:bg-white text-base md:text-lg"
                                            >
                                                Details
                                                
                                            </button>
                                        </Link>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default AllMembers;