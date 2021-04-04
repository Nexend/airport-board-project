import { ARRIVAL_RECEIVED, DEPARTURE_RECEIVED, FILTER_TEXT } from './flights.actions';

const initialState = {
  flightsList: [],
  arrivalStatus: false,
  departureStatus: false,
  searchText: '',
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARRIVAL_RECEIVED: {
      return {
        ...state,
        flightsList: action.payload.arrivalList,
        arrivalStatus: true,
        departureStatus: false,
      };
    }

    case DEPARTURE_RECEIVED: {
      return {
        ...state,
        flightsList: action.payload.departureList,
        arrivalStatus: false,
        departureStatus: true,
      };
    }

    case FILTER_TEXT: {
      return {
        ...state,
        searchText: action.payload.text,
      };
    }

    default:
      return state;
  }
};

export default flightsReducer;
