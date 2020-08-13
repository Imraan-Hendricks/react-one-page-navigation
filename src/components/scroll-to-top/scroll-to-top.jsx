import React, { useEffect, useState } from 'react';
import cssModule from './scroll-to-top.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import useWindowScroll from '../../hooks/window-scroll';

const Button = () => {
  const [hidden, setHidden] = useState(true);
  const { pageYOffset } = useWindowScroll();

  const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    if (pageYOffset > 800) return setHidden(false);
    setHidden(true);
  }, [pageYOffset]);

  return (
    <FontAwesomeIcon
      className={cssModule.icon}
      icon={faArrowAltCircleUp}
      onClick={scrollToTop}
      hidden={hidden}
    />
  );
};

export default Button;
