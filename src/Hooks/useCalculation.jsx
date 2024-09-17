import useBazar from "./useBazar";
import useFindAllMeals from "./useFindAllMeals";
import useFindDeposit from "./useFindDeposit";

const useCalculation = () => {
    const [allMeals] = useFindAllMeals();
    const [allDeposit] = useFindDeposit();
    const [bazar] = useBazar();
    
    const totalMeal = allMeals.reduce((acc, item) => parseFloat(acc) + parseFloat(item.meal), 0);
    const totalDeposit = allDeposit.reduce((acc, item) => parseFloat(acc) + parseFloat(item.money), 0);
    const totalBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.bazar), 0);
    const extraBazar = bazar.reduce((acc, item) => parseFloat(acc) + parseFloat(item.extra), 0);

    const mealRate =  (totalBazar / totalMeal).toFixed(2) 
    const dueAmount = totalDeposit - (totalBazar + extraBazar);
    
    return {totalMeal, totalDeposit, totalBazar, extraBazar, mealRate, dueAmount};
};

export default useCalculation;
