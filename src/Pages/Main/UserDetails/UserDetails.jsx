import { useParams } from "react-router-dom";
import useUsersMeals from "../../../Hooks/useUsersMeals";
import useUsersDeposit from "../../../Hooks/useUsersDeposit";

const UserDetails = () => {
    const { email } = useParams()
    const [usersMeal, refetch] = useUsersMeals({ email })
    const [usersDeposit,] = useUsersDeposit({ email })
    const totalUserMeals = usersMeal.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    const tatalUserDeposit = usersDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0) || 0
    
    console.log(tatalUserDeposit)
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default UserDetails;