import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';

const Main = () => (
  <BrowserRouter basename="/threejs-react-example">
    <Switch>
      <Route exact path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>
);

export default Main;