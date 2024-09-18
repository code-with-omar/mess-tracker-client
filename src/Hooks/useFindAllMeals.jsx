import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
const useFindAllMeals = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allMeals = [] } = useQuery({
        queryKey: ['allMeals'],
        queryFn: async () => {
            const res = await axiosSecure.get('/membersAllMeals')

            return res.data
        }
    })
    return [allMeals, refetch]
};

export default useFindAllMeals;


