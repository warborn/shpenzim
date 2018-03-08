import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment)
moment.locale('en');

// Return the current date
export function getCurrentDate() {
  return moment().format();
}

export function getStartOfCurrentWeek() {
  return moment().startOf('week').format();
}

// Generate the weekdays based on the given date
export function getWeekdays(date) {
  let days = [];
  
  const start = moment(date).startOf('week');
  const end   = moment(date).endOf('week');
  const range = moment.range(start, end);

  for(let day of range.by('days')) {
    days.push({
      fullDate: day.format('YYYYMMDD'),
      number: day.format('D')
    })
  }

  return days;
}

// Get start date of the previous week of the given date
export function getPrevWeek(date) {
  return moment(date).subtract(1, 'weeks').format();
}

// Get start date of the next week of the given date
export function getNextWeek(date) {
  return moment(date).add(1, 'weeks').format();
}