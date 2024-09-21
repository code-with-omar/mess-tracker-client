import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useCookBill = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: cookBill = [] } = useQuery({
        queryKey: ['cookBill'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cookBill')
            return res.data
        }
    })
    return [cookBill, refetch]
};

export default useCookBill;