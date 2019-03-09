import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, Post } from '../pages';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:category" component={Home} />
    <Route exact path="/:category/:id" component={Post} />
    <Route component={NotFound} />
  </Switch>
);
