
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      title: 'TEST_BOOK_1',
      count: 3,
      total: 1500,
    },
    {
      id: 2,
      title: 'TEST_BOOK_2',
      count: 2,
      total: 990,
    },
  ],
  orderTotal: 2490,
}

const reduser = (state = initState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return state = {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_BOOKS_REQUEST':
      return state = {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return state = {
        ...state,
        books: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reduser;