import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useFindDeposit = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allDeposit = [] } = useQuery({
        queryKey: ['allDeposit'],
        queryFn: async () => {
            const res = await axiosSecure.get('/deposit')
            console.log(res)
            return res.data
        }
    })
    return [allDeposit, refetch]
};

export default useFindDeposit;