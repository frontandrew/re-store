import React, { Fragment } from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, price, cover } = book;
  return (
    <div class="book-list-item">
      <div class="book-cover">
        <img src={cover} alt="book cover image"/>
      </div>
      <div class="book-details">
        <a href="#" class="book-litle">{title}</a>
        <div class="book-author">{author}</div>
        <div class="book-price">${price}</div>
        <button class="add-to-cart btn btn-info">Add to cart</button>
      </div>
    </div>
  );
}

export default BookListItem;