import React from 'react';
import PropTypes from 'prop-types';

import { green, blue } from '../../utils/colorStyles';
import { getTime, getCurrentDate } from '../../utils/dateUtils';

const ScoreboardFlights = ({ flightsList }) => {
  const sortedFlightsList = flightsList
    .slice()
    .sort(
      (a, b) =>
        new Date(a.localTime).getHours() - new Date(b.localTime).getHours() ||
        new Date(a.localTime).getMinutes() - new Date(b.localTime).getMinutes(),
    );

  return (
    <>
      {sortedFlightsList.length < 1 ? null : (
        <div className="scoreboard__calendar">
          <i className="far fa-calendar scoreboard__calendar-icon"></i>
          <div className="scoreboard-date">
            <span className="scoreboard-date__num">{getCurrentDate()}</span>
            <span className="scoreboard-date__title">TODAY</span>
          </div>
        </div>
      )}

      <table className="scoreboard__content">
        {sortedFlightsList.length < 1 ? null : (
          <thead>
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
        )}

        {sortedFlightsList.map(item => {
          const colorStyle = item.terminal === 'A' ? green : blue;

          return (
            <tbody key={item.id}>
              <tr>
                <td className="terminal-field">
                  <span style={colorStyle}>{item.terminal}</span>
                </td>
                <td className="schedule-field">
                  {item.localTime ? getTime(item.localTime) : 'not know'}
                </td>
                <td className="appointment-field">{item.destination}</td>
                <td className="status-field">{item.status}</td>
                <td className="airline-field">
                  <div className="airline-field__inner">
                    <img
                      className="airline-field__inner-img"
                      src={`${item.airlineLogo}`}
                      alt="company logo"
                    />
                    <span className="airline-field__inner-name">{item.airlineName}</span>
                  </div>
                </td>
                <td className="flight-field">{item.flight}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

ScoreboardFlights.propTypes = {
  flightsList: PropTypes.arrayOf(
    PropTypes.shape({
      terminal: PropTypes.string,
      localTime: PropTypes.string,
      destination: PropTypes.string,
      status: PropTypes.string,
      airlineLogo: PropTypes.string,
      airlineName: PropTypes.string,
      flight: PropTypes.string,
    }),
  ),
};

export default ScoreboardFlights;
