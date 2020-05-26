
const initState = {
  books:[],
}

const reduser = (state = initState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return state = {
        books: action.payload
      };    
      
    default:
      return state;
  }
};

export default reduser;