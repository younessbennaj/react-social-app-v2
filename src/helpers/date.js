//Date Fns
import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

export const getFullDate = (date) => {
    let someday = parseISO(date);
    return format(someday, 'h:m a . d LLL yyyy');
}

export const getDifferenceDate = (date) => {
    const moment = new Date();
    const someday = parseISO(date);
    let result = differenceInHours(
        moment,
        someday
    )

    if (result == 0) {

        result = differenceInMinutes(
            moment,
            someday
        );

        return `${result} min ago`

    }
    if (result >= '24') {
        return format(someday, 'd LLL')
    } else {
        return `${result}h ago`;
    }
}