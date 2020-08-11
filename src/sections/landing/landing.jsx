import React, { forwardRef } from 'react';
import cssModule from './landing.module.scss';

const Landing = forwardRef((props, ref) => {
  return (
    <div className={cssModule.root} ref={ref}>
      <h1>Landing</h1>
    </div>
  );
});

export default Landing;
