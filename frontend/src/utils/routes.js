import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, PostPage } from '../pages';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/404" component={NotFound} />
    <Route exact path="/:category" component={Home} />
    <Route exact path="/:category/:id" component={PostPage} />
  </Switch>
);
