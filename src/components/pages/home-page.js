import React, { Fragment } from 'react';

import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
    },
  ];

  return (
    <Fragment>
      <h2>Home</h2>
      <BookList books={books} />
    </Fragment>
  );
}

export default HomePage;