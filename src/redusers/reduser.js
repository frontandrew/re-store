
const initState = {
  books: [],
  loading: true,
  error: null,
}

const reduser = (state = initState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return state = {
        books: action.payload,
        loading: false,
        error: null,
      };

    case 'BOOKS_REQUESTED':
      return state = {
        books: [],
        loading: true,
        error: null,
      };

    case 'BOOKS_ERROR':
      return state = {
        books: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reduser;