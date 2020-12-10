import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import CheckOut from './Pages/Checkout';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" exact component={CheckOut} />
    </Switch>
  );
}
