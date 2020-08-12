import React, { Fragment, useContext, useEffect } from 'react';
import { NavbarContext } from './navbar-context';

const Active = (props) => {
  const { setActive } = useContext(NavbarContext);

  useEffect(() => {
    if (
      props.pageYOffset >= props.offsetTop &&
      props.pageYOffset < props.offsetTop + props.clientHeight
    )
      setActive(props.name);
  }, [
    setActive,
    props.pageYOffset,
    props.offsetTop,
    props.clientHeight,
    props.name,
  ]);

  return <Fragment />;
};

export default Active;
