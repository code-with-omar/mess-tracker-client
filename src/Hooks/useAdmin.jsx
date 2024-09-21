import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = ({ email }) => {
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', email], // Include email in the query key to ensure uniqueness
        queryFn: async () => {
            if (!email) return false;
            const res = await axiosSecure.get(`/usersFind?email=${email}`);
            return res?.data[0]?.role === 'admin'; // Assuming role is 'admin'
        },
        enabled: !!email // Only run the query if email exists
    });

    return { isAdmin, isAdminLoading };
};

export default useAdmin;
