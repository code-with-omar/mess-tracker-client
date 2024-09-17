import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsersMeals = ({email}) => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: usersMeal = [] } = useQuery({
        queryKey: ['usersMeal'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersFind?email=${email}`)
            return res.data
        }
    })
    return [usersMeal, refetch]
};

export default useUsersMeals;