import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsersFind = ({email}) => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: useUsersFind = [] } = useQuery({
        queryKey: ['useUsersFind'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersFind?email=${email}`)
            return res.data
        }
    })
    return [useUsersFind, refetch]
};

export default useUsersFind;