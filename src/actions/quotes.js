
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
   };
  };

export const upvoteQuote = (quote) => {
  return {
    type: 'UPVOTE_QUOTE',
    quote
  };
};


export const removeQuote = (quote) => {
  return{
    type: 'REMOVE_QUOTE',
    quote
  }
};


export const downvoteQuote = (quote) => {
  console.log("Dispatch's downvoteQuote was trigger", quote)
  return{
    type: 'DOWNVOTE_QUOTE',
    quote
  }
};
