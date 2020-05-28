const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks
});

const booksRequested = () => ({ 
  type: 'FETCH_BOOKS_REQUEST' 
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error
});

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(responce => dispatch(booksLoaded(responce)))
    .catch(err => {
      dispatch(booksError(err));
      throw err;
    });
  }


export {
  fetchBooks
}