import React from 'react';
import cssModule from './header.module.scss';

const Header = () => {
  return (
    <div className={cssModule.root}>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
