import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarContextProvider from './components/navbar/navbar-context';
import Header from './sections/header/header';
import Sidebar from './components/sidebar/sidebar';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import Main from './sections';
import NotFound from './sections/not-found/not-found';
import Footer from './sections/footer/footer';

const App = () => {
  return (
    <NavbarContextProvider>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <ScrollToTop />
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
