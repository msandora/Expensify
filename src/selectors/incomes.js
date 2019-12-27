import moment from 'moment';

//Get visisble incomes
export default (incomes, { text, sortBy, startDate, endDate }) => {
    return incomes.filter((income) => {
      // const startDateMatch = typeof startDate !== 'number' || income.createdAt >= startDate;
      // const endDateMatch = typeof endDate !== 'number' || income.createdAt <= endDate;
      const createdAtMoment = moment(income.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

      const textMatch = income.description.toLowerCase().includes(text.toLowerCase()) || income.note.toLowerCase().includes(text.toLowerCase());
      // console.log(income.amount);
      // IF all three are true, return
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};