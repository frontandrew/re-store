import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <div className="app">     

      <Switch>
        <Route exact path= "/home" component={HomePage}/>
        <Route path= "/cart" component={CartPage}/>
        <Redirect from="/" to="/home" />
      </Switch>

    </div>
  );
}

export default App;