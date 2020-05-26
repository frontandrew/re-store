import React from 'react';

import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (service) => {
            return <Wrapped {...props} service={service} />
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService;