import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
const useUserPreviousMonth = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: previousMonth = [] } = useQuery({
        queryKey: ['previousMonth'],
        queryFn: async () => {
            const res = await axiosSecure.get('/membersAllMeals')

            return res.data
        }
    })
    return [previousMonth, refetch]
};

export default useUserPreviousMonth;