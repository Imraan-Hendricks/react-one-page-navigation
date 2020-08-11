import React, { forwardRef } from 'react';
import cssModule from './services.module.scss';

const Services = forwardRef((props, ref) => {
  return (
    <div className={cssModule.root} ref={ref}>
      <h1>Services</h1>
    </div>
  );
});

export default Services;
