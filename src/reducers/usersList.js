import { LOAD_USERS } from '../actions/users';
const initialState = [];

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return [...action.users];
    default:
      return state;
  }
};
export default usersList;
