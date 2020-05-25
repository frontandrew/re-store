import React from 'react';

import Spiner from '../spiner';
import ErrorButton from '../error-button/';
import ErrorBoundry from '../error-boundry/';



const App = () => {
  return (
    <ErrorBoundry>
      <div>
        <Spiner />
        <ErrorButton />
      </div>
    </ErrorBoundry>
  );
}

export default App;