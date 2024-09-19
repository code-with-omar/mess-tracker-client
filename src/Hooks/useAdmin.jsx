import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = ({ email }) => {
    const axiosSecure = useAxiosSecure()
    const { isAdminLoading, data: isAdmin = [] } = useQuery({
        queryKey: ['isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersFind?email=${email}`)
            console.log(res?.data[0]?.role)
            return res?.data[0]?.role
        }
    });

    return [isAdmin, isAdminLoading]
};

export default useAdmin;
