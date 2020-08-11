import React from 'react';
import cssModule from './not-found.module.scss';
import Button from 'react-bootstrap/Button/';
import useRedirect from '../../hooks/redirect';

const NotFound = () => {
  const redirect = useRedirect();
  return (
    <div className={cssModule.root}>
      <h1>Page not found</h1>
      <Button
        className={cssModule.button}
        variant='primary'
        onClick={() => redirect('/')}>
        Site Home
      </Button>
    </div>
  );
};

export default NotFound;
