import React, { useEffect, useState } from 'react';
import cssModule from './sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import useWindowScroll from '../../hooks/window-scroll';

const Sidebar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollDirection } = useWindowScroll();

  useEffect(() => {
    if (scrollDirection === 'up') return setHidden(false);
    if (scrollDirection === 'down') return setHidden(true);
  }, [scrollDirection]);

  return (
    <div className={cssModule.root} hidden={hidden}>
      <FontAwesomeIcon
        className={[cssModule.icon, cssModule.facebook].join(' ')}
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className={[cssModule.icon, cssModule.twitter].join(' ')}
        icon={faTwitter}
      />
      <FontAwesomeIcon
        className={[cssModule.icon, cssModule.google].join(' ')}
        icon={faGoogle}
      />
      <FontAwesomeIcon
        className={[cssModule.icon, cssModule.linkedin].join(' ')}
        icon={faLinkedin}
      />
      <FontAwesomeIcon
        className={[cssModule.icon, cssModule.youtube].join(' ')}
        icon={faYoutube}
      />
    </div>
  );
};

export default Sidebar;
