import { useEffect, useState } from "react";
import useBazar from "./useBazar";
import useFindAllMeals from "./useFindAllMeals";
import useUsers from "./useUsers";
import useUsersDeposit from "./useUsersDeposit";
import useUsersMeals from "./useUsersMeals";

const usePerUserDetails = ({ user }) => {
    const [loading, setLoading] = useState(true);
    const email = user?.email
    const [users] = useUsers();
    const allUsers = users.length
    const [bazar] = useBazar();
    const [allMeals] = useFindAllMeals();
    const [usersMeal] = useUsersMeals(email);
    const [usersDeposit,] = useUsersDeposit(email)
    console.log(users)
    // Calculate totals
    let totalUserDeposit = usersDeposit?.reduce((acc, item) => acc + parseFloat(item.money || 0), 0) || 0;
    const totalMeal = allMeals?.reduce((acc, item) => acc + parseFloat(item.meal || 0), 0) || 0;
    const totalBazar = bazar?.reduce((acc, item) => acc + parseFloat(item.bazar || 0), 0) || 0;
    const extraBazar = bazar?.reduce((acc, item) => acc + parseFloat(item.extra || 0), 0) || 0;

    const totalUserMeal = usersMeal?.reduce((acc, item) => acc + parseFloat(item?.meal || 0), 0) || 0;
    const mealRate = totalBazar / totalMeal
    const individualExtra = extraBazar / allUsers
    const mealCost = mealRate * totalUserMeal
    const totalCost = mealCost + individualExtra
    const due=totalUserDeposit-totalCost
    return { mealRate, loading, individualExtra, mealCost, totalCost, due,totalUserDeposit,totalUserMeal };
};

export default usePerUserDetails;
