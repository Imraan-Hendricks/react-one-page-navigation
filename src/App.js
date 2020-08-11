import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarContextProvider from './components/navbar/navbar-context';
import Main from './sections';
import NotFound from './sections/not-found/not-found';
import Footer from './sections/footer/footer';

const App = () => {
  return (
    <NavbarContextProvider>
      <BrowserRouter>
        <Switch>
          <Route component={Main} exact path='/' strict />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </NavbarContextProvider>
  );
};

export default App;
