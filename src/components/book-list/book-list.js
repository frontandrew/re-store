//PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENTS
import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';

//STYLES
import './book-list.css';



const BookList = ({books, onAddedToCart}) => {
  
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book} />
            </li>
          )
        })
      }
    </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return (
        <Spiner />
      );
    }

    if (error) {
      return (
        <ErrorIndicator />
      );
    }

    return (
      <BookList books={books} onAddedToCart={onAddedToCart} />
    );
  }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);