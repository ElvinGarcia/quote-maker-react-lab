import { combineReducers } from 'redux';
import quotes from './quotes';

export default combineReducers({
  quotes
});

function quotes(state = [], action){
  switch (action.type) {
    case 'ADD_QUOTE':
    return [...state, action.quote, action.author];

    case 'REMOVE_QUOTE':
    return ;

    case 'UPVOTE_QUOTE':
    return ;

    case 'DOWNVOTE_QUOTE':
    return ;


    default:
      return state;

  }

}




