import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container d-flex flex-column">
      <ShopHeader numItems={2} total={243}/>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </main>
  );
}

export default App;