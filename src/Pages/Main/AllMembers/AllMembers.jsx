import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AllMembers = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
  console.log(users)
    const handleDelete=()=>{}
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
                                        {
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                        }
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