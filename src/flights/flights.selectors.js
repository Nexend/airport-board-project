import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flights.flightsList;

export const flightsFilterTextSelector = state => state.flights.searchText;

export const flightsArrivalStatusSelector = state => state.flights.arrivalStatus;

export const flightsDepartureStatusSelector = state => state.flights.departureStatus;

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector, flightsFilterTextSelector],
  (flightsList, searchText) =>
    flightsList.filter(
      item =>
        item.destination.toLowerCase().includes(searchText.toLowerCase()) ||
        item.airlineName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.flight.toLowerCase().includes(searchText.toLowerCase()),
    ),
);
