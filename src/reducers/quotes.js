export default (state = [], action) => {
  let index
  let quote
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId.id);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId.id);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes - 1 }),
        ...state.slice(index + 1)
      ];

    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId.id);


    default:
      return state;

    }

  }
