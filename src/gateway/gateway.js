import moment from 'moment';

const currentDate = moment().format('DD-MM-YYYY');
const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsData = () =>
  fetch(`${baseUrl}/${currentDate}`).then(response => {
    if (response.status === 200) {
      return response.json().then(data => data.body);
    }
    throw new Error('Failed to load data');
  });
