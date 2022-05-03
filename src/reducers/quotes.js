export default (state = [], action) => {

  switch (action.type) {
    case 'ADD_QUOTE':
      // console.log("ADD_QUOTE reducer was exceuted")
      return [...state, action.quote];


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
