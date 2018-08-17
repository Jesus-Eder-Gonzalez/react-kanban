import { LOAD_CARDS } from '../actions/cards';
const initialState = [];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    default:
      return state;
  }
};
export default cardsList;
