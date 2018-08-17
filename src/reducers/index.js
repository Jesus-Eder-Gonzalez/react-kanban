import { combineReducers } from 'redux';
import usersList from './usersList';
import cardsList from './cardsList';
import statusList from './statusList';

export default combineReducers({
  usersList,
  cardsList,
  statusList
});
