import { useParams } from "react-router-dom";
import useUsersMeals from "../../../Hooks/useUsersMeals";
import useDate from "../../../Hooks/useDate";
import emptyImage from "./../../../assets/empty.png";

const UserMealDetails = () => {
  const date = useDate();
  const month = date.split(" ")[0];
  const { email } = useParams();
  const [usersMeal, refetch] = useUsersMeals({ email });
  const totalUserMeal =
    usersMeal?.reduce((acc, item) => acc + parseFloat(item?.meal || 0), 0) || 0;
  return (
    <div>
      {usersMeal.length > 0 ? (
        <div className="overflow-x-auto">
          <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl text-[#07332F] font-bold my-5">
            Meals Details
          </h2>
          <table className="table mt-5 md:mt-10">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-lg font-semibold">
              <tr className="border-b-0 rounded">
                <th>#</th>
                <th>Date</th>

                <th className="text-right">Meal</th>
              </tr>
            </thead>
            <tbody className="text-[#737373] text-lg">
              {usersMeal.map((meal, index) => (
                <tr
                  key={meal._id}
                  className={`border-b-[.5px] border-[#E8E8E8] ${
                    index % 2 === 0
                      ? "bg-[#e7e9eb] text-black"
                      : "bg-[#a7aec4] text-black"
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>
                    {month}, {meal.date}{" "}
                  </td>
                  <td className="text-right">{meal.meal} Units</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#D1A054] text-white text-lg font-semibold">
              <tr className="border-b-0 rounded">
                <td></td>
                <td></td>

                <th className="text-right">
                  Total Meals = {totalUserMeal.toFixed(2)}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <>
          <img className="w-full md:w-1/2 mx-auto " src={emptyImage} alt="" />
        </>
      )}
    </div>
  );
};

export default UserMealDetails;
