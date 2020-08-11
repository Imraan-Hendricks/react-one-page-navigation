import React, { forwardRef } from 'react';
import cssModule from './about.module.scss';

const About = forwardRef((props, ref) => {
  return (
    <div className={cssModule.root} ref={ref}>
      <h1>About</h1>
    </div>
  );
});

export default About;
