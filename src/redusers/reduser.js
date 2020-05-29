
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 2490,
}

const reduser = (state = initState, action) => {

  console.log(action.type);

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

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price,
      }
      return state = {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ]
      };

    default:
      return state;
  }
};

export default reduser;