import { useParams } from "react-router-dom";
import useUsersMeals from "../../../Hooks/useUsersMeals";

const UserDetails = () => {
    const {email}=useParams()
    const [usersMeal,refetch]=useUsersMeals({email})
    console.log(usersMeal)
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default UserDetails;