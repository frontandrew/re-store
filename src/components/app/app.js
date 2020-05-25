import React from 'react';

import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';

const App = () => {
  return (
    <div>
      <ErrorIndicator />
      <Spiner />
    </div>
  );
}

export default App;