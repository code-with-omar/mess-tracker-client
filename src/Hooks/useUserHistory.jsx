import { useState, useEffect } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUserHistory = (userEmail) => {
    const [history, setHistory] = useState(null); // State to store the fetched history
    const [deposit, setDeposit] = useState(null)
    const [meal, setMeal] = useState(null)
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!userEmail) {
            return; // Exit early if no email is provided
        }

        const fetchUserHistory = async () => {
            try {
                const response = await axiosSecure.get(`/usersDeposit?email=${userEmail}`);
                setDeposit(response.data);
                const responseMeal = await axiosSecure.get(`/usersMealFind?email=${userEmail}`)
                setMeal(responseMeal.data)
            } catch (error) {
                console.error("Error fetching user history:", error);
            }
        };

        fetchUserHistory();
    }, [userEmail, axiosSecure]); // Run effect when userEmail or axiosSecure changes

    return [deposit,meal]; // Return the history data
};

export default useUserHistory;
