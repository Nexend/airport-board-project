import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const ScoreboardButtons = ({ arrivalStatus, departureStatus, onArrival, onDeparture }) => {
  const location = useLocation();

  const arrivalClass = classNames('scoreboard__btn', {
    scoreboard__btn_active: arrivalStatus,
  });

  const departureClass = classNames('scoreboard__btn', {
    scoreboard__btn_active: departureStatus,
  });

  return (
    <div className="scoreboard__inner">
      <Link to={`/departures${location.search}`} className={departureClass} onClick={onDeparture}>
        <i className="fas fa-plane-departure scoreboard__inner-departure-icon"></i>DEPARTURES
      </Link>
      <Link to={`/arrivals${location.search}`} className={arrivalClass} onClick={onArrival}>
        <i className="fas fa-plane-arrival scoreboard__inner-arrival-icon"></i>ARRIVALS
      </Link>
    </div>
  );
};

export default ScoreboardButtons;
