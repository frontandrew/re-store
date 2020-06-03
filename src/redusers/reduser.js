import updateBooksList from './books-list';
import updateShoppingCart from './shopping-cart';

const reduser = (state, action) => {
  return {
    booksList: updateBooksList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  }
};

export default reduser