import React, { Component } from 'react';
import moment from 'moment';
import { getCurrentDate, getWeekdays, getPrevWeek, getNextWeek, getStartOfCurrentWeek } from '../dateHelpers';


class Calendar extends Component {
  constructor() {
    super();
    
    this.state = {
      currentDate: getCurrentDate(),
      startWeekDate: getStartOfCurrentWeek(),
      weekdays: []
    };
  }

  componentWillMount() {
    this.setState(prevState => ({
      weekdays: getWeekdays(prevState.startWeekDate)
    }));
  }

  onWeekBackward = () => {
    this.setState(prevState => {
      const newDate = getPrevWeek(prevState.startWeekDate);
      return {
        startWeekDate: newDate,
        weekdays: getWeekdays(newDate)
      }
    });
  }

  onWeekForward = () => {
    this.setState(prevState => {
      const newDate = getNextWeek(prevState.startWeekDate);
      return {
        startWeekDate: newDate,
        weekdays: getWeekdays(newDate)
      }
    });
  }

  render() {
    const { weekdays, startWeekDate } = this.state;
    return (
      <div>
        <h3>Calendar</h3>
        <div className="date">{moment(startWeekDate).format('MMMM')} {weekdays[0].number} - {weekdays[weekdays.length - 1].number}</div>
        <div className="navigator">
          <button onClick={this.onWeekBackward}>&lt;</button>
          <div className="separator"></div>
          <button onClick={this.onWeekForward}>&gt;</button>
        </div>
        <ul>
        {
          weekdays.map(day => <li key={day.number}>{day.number}</li>)
        }
        </ul>
      </div>
    )
  }
}

export default Calendar;