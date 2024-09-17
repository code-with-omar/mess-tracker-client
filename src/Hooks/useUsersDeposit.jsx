import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsersDeposit = ({email}) => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: usersDeposit = [] } = useQuery({
        queryKey: ['usersDeposit'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersDeposit?email=${email}`)
            return res.data
        }
    })
    return [usersDeposit, refetch]
};

export default useUsersDeposit;