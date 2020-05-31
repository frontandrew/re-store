
const initState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 2490,
}

const addedCartItem = (cartItem = {}, book) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = cartItem;

  return cartItem = {
    id,
    title,
    count: count + 1,
    total: (+total + book.price).toFixed(2),
  }
}

const addedCartItems = (items, item, newItem) => {
  return item ? items.map(item => item.id === newItem.id ? newItem : item) : [...items, newItem]
}

const removedCartItem = (item) => ({
  ...item,
  count: item.count - 1,
  total: +((item.total / item.count) * (item.count - 1)).toFixed(2),
});

const removedCartItems = (newItem, items) => {
  const { id, count } = newItem;
  if (count > 0) {
    return items.map(item => {
      return item.id === id ? newItem : item
    });
  } else {
    return items.filter(item => item.id !== id)
  }
}

const deletedCartItems = (delItem, items) => {
  return items.filter(item => item.id !== delItem.id)
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
      const addbookId = action.payload;
      const book = state.books.find(book => book.id === addbookId);
      const addItem = state.cartItems.find(item => item.id === addbookId);

      const newItem = addedCartItem(addItem, book);
      return state = {
        ...state,
        cartItems: addedCartItems(state.cartItems, addItem, newItem)
      }

    case 'BOOK_REMOVED_FROM_CART':
      const rembookId = action.payload;
      const remItem = state.cartItems.find(item => item.id === rembookId);

      const updatedItem = removedCartItem(remItem);
      return state = {
        ...state,
        cartItems: removedCartItems(updatedItem, state.cartItems)
      }

    case 'BOOK_DELETED_FROM_CART':
      const delbookId = action.payload;
      const delItem = state.cartItems.find(item => item.id === delbookId);

      return state = {
        ...state,
        cartItems: deletedCartItems(delItem, state.cartItems)
      }

    default:
      return state;
  }
};

export default reduser;