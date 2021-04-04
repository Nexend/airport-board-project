import { fetchFlightsData } from '../gateway/gateway';

export const ARRIVAL_RECEIVED = 'FLIGHTS/ARRIVAL_RECEIVED';
export const DEPARTURE_RECEIVED = 'FLIGHTS/DEPARTURE_RECEIVED';
export const FILTER_TEXT = 'FLIGHTS/FILTER_TEXT';

export const filterSearchFlights = text => {
  return {
    type: FILTER_TEXT,
    payload: {
      text,
    },
  };
};

export const arrivalReceived = arrivalList => {
  return {
    type: ARRIVAL_RECEIVED,
    payload: {
      arrivalList,
    },
  };
};

export const departureReceived = departureList => {
  return {
    type: DEPARTURE_RECEIVED,
    payload: {
      departureList,
    },
  };
};

export const getArrivalList = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsData().then(data =>
      dispatch(
        arrivalReceived(
          data.arrival
            .filter(flight => new Date(flight.actual).getDate() === new Date().getDate())
            .map(flight => {
              return {
                id: flight.ID,
                terminal: flight.term,
                localTime: flight.actual,
                destination: flight['airportFromID.name_en'],
                status: flight.status,
                airlineLogo: flight.airline.en.logoName,
                airlineName: flight.airline.en.name,
                flight: flight.codeShareData[0].codeShare,
              };
            }),
        ),
      ),
    );
  };

  return thunkAction;
};

export const getDepartureList = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsData().then(data =>
      dispatch(
        departureReceived(
          data.departure
            .filter(flight => new Date(flight.actual).getDate() === new Date().getDate())
            .map(flight => {
              return {
                id: flight.ID,
                terminal: flight.term,
                localTime: flight.actual,
                destination: flight['airportToID.name_en'],
                status: flight.status,
                airlineLogo: flight.airline.en.logoName,
                airlineName: flight.airline.en.name,
                flight: flight.codeShareData[0].codeShare,
              };
            }),
        ),
      ),
    );
  };

  return thunkAction;
};
