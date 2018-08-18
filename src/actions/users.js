import axios from 'axios';

export const LOAD_USERS = 'LOAD_USERS';
export const GET_USERS = 'GET_USERS';

export const loadUsers = () => {
  return dispatch => {
    return axios
      .get('/api/users')
      .then(users => {
        dispatch({
          type: LOAD_USERS,
          users: users.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const getUsers = () => {
  return (dispatch, getState) => {
    let temp = getState();
    console.log('temp',temp);
  };
};
