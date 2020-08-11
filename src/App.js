import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './sections';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} exact path='/' strict />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
