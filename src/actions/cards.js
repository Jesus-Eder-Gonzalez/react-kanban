import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

const CARDS_URL = '/api/cards';

export const loadCards = () => {
  return dispatch => {
    return axios
      .get(CARDS_URL)
      .then(cards => {
        console.log(cards);
        dispatch({
          type: LOAD_CARDS,
          cards: cards.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const addCard = card => {
  return dispatch => {
    return axios
      .post(CARDS_URL, card)
      .then(response => {
        dispatch({
          type: ADD_CARD,
          card: response.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
