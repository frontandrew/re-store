import React from 'react';
import { Link } from 'react-router-dom';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, cover } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={cover} alt="book cover" />
      </div>
      <div className="book-details">
        <Link to="/" className="book-litle">{title}</Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          onClick={onAddedToCart}
          className="add-to-cart btn btn-info" >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookListItem;