import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as flightsActions from '../flights.actions';

const Search = ({ filterSearchFlights }) => {
  const [searchText, setSearchText] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (searchText) {
      history.push(`${location.pathname}/${searchText}`);
    }
  }, []);

  return (
    <div className="search">
      <h1 className="search__title">SEARCH FLIGHTS</h1>
      <div className="search-field">
        <i className="fas fa-search search-field__icon"></i>
        <Link to={`${history.location.pathname}?search=${searchText}`}>
          <form className="search-field__form">
            <input
              type="text"
              className="search-field__input"
              placeholder="Airline, destination or flight #"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <button
              className="search-field__btn"
              type="submit"
              onClick={() => filterSearchFlights(searchText)}
            >
              SEARCH
            </button>
          </form>
        </Link>
      </div>
    </div>
  );
};

const mapDispatch = {
  filterSearchFlights: flightsActions.filterSearchFlights,
};

Search.propTypes = {
  filterSearchFlights: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Search);
