
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 2490,
}

const updateCartItems = (items, item, idx) => {
  if (idx === -1) {
    return [
      ...items,
      item
    ]
  }

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1),
  ]
}

const updateItem = (item = {}, book) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: +(total + book.price).toFixed(2),
  }
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
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];

      const newItem = updateItem(item, book);
      return state = {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      }


    default:
      return state;
  }
};

export default reduser;