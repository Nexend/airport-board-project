import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as flightsSelectors from '../flights.selectors';
import * as flightsActions from '../flights.actions';
import ScoreboardButtons from './ScoreboardButtons.jsx';
import ScoreboardFlights from './ScoreboardFlights.jsx';

const Scoreboard = ({
  flightsList,
  arrivalStatus,
  departureStatus,
  getArrivalList,
  getDepartureList,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/arrivals') {
      getArrivalList();
    }

    if (location.pathname === '/departures') {
      getDepartureList();
    }
  }, []);

  return (
    <div className="scoreboard">
      <ScoreboardButtons
        arrivalStatus={arrivalStatus}
        departureStatus={departureStatus}
        onArrival={getArrivalList}
        onDeparture={getDepartureList}
      />
      <ScoreboardFlights flightsList={flightsList} />
    </div>
  );
};

const mapState = state => {
  return {
    flightsList: flightsSelectors.filteredFlightsListSelector(state),
    arrivalStatus: flightsSelectors.flightsArrivalStatusSelector(state),
    departureStatus: flightsSelectors.flightsDepartureStatusSelector(state),
  };
};

const mapDispatch = {
  getArrivalList: flightsActions.getArrivalList,
  getDepartureList: flightsActions.getDepartureList,
};

Scoreboard.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  arrivalStatus: PropTypes.bool.isRequired,
  departureStatus: PropTypes.bool.isRequired,
  getArrivalList: PropTypes.func.isRequired,
  getDepartureList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Scoreboard);
