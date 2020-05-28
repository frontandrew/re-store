//PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENTS
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';

//STYLES
import './book-list.css';


class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then(responce => booksLoaded(responce))
      .catch(err => {
        booksError(err);
        throw err;
      });
  }

  render() {
    const { books, loading, error } = this.props;
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
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
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
  connect(mapStateToProps, { booksLoaded, booksRequested, booksError }),
)(BookList);