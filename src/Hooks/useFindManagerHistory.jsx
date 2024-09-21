import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
const useFindManagerHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: managerHistory = [] } = useQuery({
        queryKey: ['managerHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/closeManagerHistory')
            return res.data
        }
    })
    return [managerHistory, refetch]
};

export default useFindManagerHistory;