import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
const useBazar = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: bazar = [] } = useQuery({
        queryKey: ['bazar'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bazar')
            return res.data
        }
    })
    return [bazar, refetch]
};

export default useBazar;