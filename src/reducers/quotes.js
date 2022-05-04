export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'UPVOTE_QUOTE':
        console.log("reducer's upvote was triiger")
        return {};

    case 'REMOVE_QUOTE':
      return ;


    case 'DOWNVOTE_QUOTE':
      return ;


    default:
      return state;

    }

  }
