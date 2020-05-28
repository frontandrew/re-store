
const initState = {
  books:[],
  loading: true,
}

const reduser = (state = initState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return state = {
        books: action.payload,
        loading: false,
      };    
      
    default:
      return state;
  }
};

export default reduser;