//PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENTS
import { booksLoaded } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

import BookListItem from '../book-list-item';
import Spiner from '../spiner';

//STYLES
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks()
      .then((responce) => booksLoaded(responce));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return (
        <Spiner />
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
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded }),
)(BookList);

/* export default withBookstoreService()(connect(mapStateToProps, { booksLoaded })(BookList)); */
