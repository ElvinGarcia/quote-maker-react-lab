import uuid from 'uuid';
export function quotesReducer(state = [],action){
  let index
  let quote
  switch (action.type) {
    case 'ADD_QUOTE':
      quote = state.find((quote) => quote.author === action.quote.author)
      if (quote) {
        action.quote.author_id = quote.author_id
        return [...state, action.quote ]
      } else {
        action.quote.author_id = uuid();
        return [...state, action.quote];
      }

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if(quote.votes){
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes - 1 }),
        ...state.slice(index + 1)
      ];
      }
      return state

    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId);

    default:
      return state;

    }

  }


