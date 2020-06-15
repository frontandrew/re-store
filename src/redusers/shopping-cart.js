const updateCartItems = (items, item, idx) => {
  if (idx === -1) {
    return [
      ...items,
      item
    ]
  }

  if (item.count === 0) {
    return [
      ...items.slice(0, idx),
      ...items.slice(idx + 1),
    ]
  }

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1),
  ]
}

const updateItem = (item = {}, book, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: +(total + quantity * book.price).toFixed(2),
  }
}

const updateTotal = (items) => {
  let booksArr = [];
  let moneyArr = [];
  items.forEach(item => {
    booksArr.push(item.count);
    moneyArr.push(item.total);
  });
  const totalReduser = (arr) => {
    return arr.reduce((accum, current) => accum + current, 0)
  }
  return {
    books: totalReduser(booksArr),
    money: totalReduser(moneyArr),
  }
}


const updateOrder = (state, bookId, quantity) => {
  const { booksList: { books }, shoppingCart: { cartItems } } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateItem(item, book, quantity);
  const newItems = updateCartItems(cartItems, newItem, itemIndex)
  const newTotal = updateTotal(newItems);
  return {
    cartItems: newItems,
    orderTotal: newTotal.money.toFixed(2),
    booksTotal: newTotal.books,
  }
}

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      booksTotal: 0,
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1)

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count)

    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart