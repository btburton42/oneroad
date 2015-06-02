'use strict';

import React from 'react';
import {Route, NotFoundRoute} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <Route
      name='randomItem'
      handler={require('./components/randomItem')} />
    <Route
      name='item'
      path='rule/:id'
      handler={require('./components/item')} />
    <NotFoundRoute
      handler={require('./components/randomItem')} />
  </Route>
);
