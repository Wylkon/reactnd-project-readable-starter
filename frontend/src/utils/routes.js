import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from '../pages';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);
