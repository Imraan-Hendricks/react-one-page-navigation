import React, { forwardRef } from 'react';
import cssModule from './contact.module.scss';

const Contact = forwardRef((props, ref) => {
  return (
    <div className={cssModule.root} ref={ref}>
      <h1>Contact</h1>
    </div>
  );
});

export default Contact;
