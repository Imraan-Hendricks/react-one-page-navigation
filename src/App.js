import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './sections';
import NotFound from './sections/not-found/not-found';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} exact path='/' strict />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
