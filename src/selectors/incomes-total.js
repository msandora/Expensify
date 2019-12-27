export default (incomes) => {
    // if (incomes.length === 0)  {
    //     return 0;
    // } else {
        return incomes
            .map((income) => income.amount)
            .reduce((sum, value) => sum + value, 0);
    // }
};