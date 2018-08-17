import axios from 'axios';

export const LOAD_STATUS = 'LOAD_STATUS';

const FULL_STATUS_URL = '/api/status/cards';

export const loadStatus = () => {
  return dispatch => {
    return axios
      .get(FULL_STATUS_URL)
      .then(response => {
        console.log(response);
        dispatch({
          type: LOAD_STATUS,
          status: response.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
