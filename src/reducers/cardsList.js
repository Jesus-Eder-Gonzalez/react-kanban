import { LOAD_CARDS, ADD_CARD, DELETE_CARD, EDIT_CARD} from '../actions/cards';
const initialState = [];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD:
      return [...state, action.card];
    case DELETE_CARD:
      return [...action.cards];
    case EDIT_CARD:

      let newState = state.filter(card => card.id !== action.id);

      return [...newState, action.card];
    default:
      return state;
  }
};
export default cardsList;
