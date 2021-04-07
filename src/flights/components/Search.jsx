import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightsActions from '../flights.actions';

const Search = ({ filterSearchFlights }) => {
  const [searchText, setSearchText] = useState('');
  const qs = require('qs');
  const location = useLocation();
  const history = useHistory();

  const handleSearch = e => {
    e.preventDefault();

    const queryObj = {
      ...qs.parse(location.search, { ignoreQueryPrefix: true }),
      search: searchText,
    };

    if (!searchText) {
      delete queryObj.search;
    }

    history.push(`${location.pathname}?${qs.stringify(queryObj)}`);
  };

  return (
    <div className="search">
      <h1 className="search__title">SEARCH FLIGHTS</h1>
      <div className="search-field">
        <i className="fas fa-search search-field__icon"></i>
        <form className="search-field__form" onSubmit={handleSearch}>
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
