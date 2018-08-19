import axios from 'axios';

export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';

export const loadPriorities = () => {
  return dispatch => {
    return axios
      .get('/api/priorities')
      .then(priorities => {
        dispatch({
          type: LOAD_PRIORITIES,
          priorities: priorities.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
