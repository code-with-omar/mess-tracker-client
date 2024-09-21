import useBazar from "./useBazar";
import useFindAllMeals from "./useFindAllMeals";
import useUsersDeposit from "./useUsersDeposit";
import useUsersMeals from "./useUsersMeals";


const useMemberHome = ({ email }) => {
    const [usersDeposit, refetch] = useUsersDeposit({ email })
    const [usersMeal,] = useUsersMeals({ email })
    const [bazar,] = useBazar()
    const [allMeals,] = useFindAllMeals()
    return [usersDeposit, usersMeal, bazar,allMeals]
};

export default useMemberHome;