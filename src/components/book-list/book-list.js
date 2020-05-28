//PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENTS
import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';

//STYLES
import './book-list.css';


class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
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

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
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
)(BookList);