const useFindLastDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    return lastDate
};

export default useFindLastDate;


