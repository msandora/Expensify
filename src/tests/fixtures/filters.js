import moment from 'moment';

const filtersData = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFiltersData = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filtersData, altFiltersData };