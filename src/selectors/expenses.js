import moment from 'moment';
//get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => { //spread the filters object
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;        
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = (!text) || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;        
    }).sort( (a, b) => {
        if (sortBy === 'date') { //return latest first            
            if (a.createdAt < b.createdAt) return 1;
            else if (a.createdAt > b.createdAt) return -1;
            else return 0;
        } else { //bring more expensive first
            if (a.amount < b.amount) return 1;
            else if (a.amount > b.amount) return -1;
            else return 0;
        }
    });
};