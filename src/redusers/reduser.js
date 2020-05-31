
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 2490,
}

const updateCartItem = (cartItem = {}, book) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = cartItem;

  return cartItem = {
    id,
    title,
    count: count + 1,
    total: (+total + book.price).toFixed(2),
  }
}

const updateCartItems = (items, item, newItem) => {
  return item ? items.map(item => item.id === newItem.id ? newItem : item) : [...items, newItem]
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
      const book = state.books.find(book => book.id === bookId);
      const item = state.cartItems.find(item => item.id === bookId);

      const newItem = updateCartItem(item, book);
      return state = {
        ...state,
        cartItems: updateCartItems(state.cartItems, item, newItem)
      }

    default:
      return state;
  }
};

export default reduser;