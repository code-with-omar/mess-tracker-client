import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useUsers from "../../../Hooks/useUsers";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllMembers = () => {
    const [users,refetch] = useUsers()
    const axiosSecure=useAxiosSecure()
    const rule = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You make ${user.name} as admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: `Now ${user.name} is a admin`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }

        });

    }
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

                            <th className="text-right">Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="border-b-[.5px] border-[#E8E8E8]">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? "Admin" : <button onClick={() => rule(user)} className="btn btn-ghost btn-xs text-lg text-white bg-[#D1A054] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><FaUsers className="text-3xl "></FaUsers></button>
                                        }

                                    </td>
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