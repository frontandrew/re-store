
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 2490,
}

const updateCartItems = (state, id) => {  
  const inCartItem = state.cartItems.find((item) => item.id === id)
  if (inCartItem === undefined) {
    const book = state.books.find((book) => book.id === id);
    const newItem = {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price,
      price: book.price,
    }
    return [...state.cartItems, newItem];
  } else {
    inCartItem.count = inCartItem.count + 1;
    inCartItem.total = (inCartItem.count + 1) * inCartItem.price;

    const newCatrItems = state.cartItems.map((item) => {
      return item.id === id ? inCartItem : item
    });
    return newCatrItems
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
        return state = {
        ...state,
        cartItems: updateCartItems(state, action.payload)
      }

    default:
      return state;
  }
};
export default reduser;