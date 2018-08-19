import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';

const CARDS_URL = '/api/cards';

export const loadCards = () => {
  return dispatch => {
    return axios
      .get(CARDS_URL)
      .then(cards => {
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

export const editCard = card => {
  console.log('action',card);
  return dispatch => {
    return axios
      .put(CARDS_URL, card)
      .then(response => {
        dispatch({
          type: EDIT_CARD,
          card: response.data,
          id: response.data.id
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const deleteCard = id => {
  return dispatch => {
    return axios
      .delete(CARDS_URL, { data: { id } })
      .then(cards => {
        console.log(cards.data);
        dispatch({
          type: DELETE_CARD,
          cards: cards.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
