import React, { useContext, useState } from 'react';
import cssModule from './navbar.module.scss';
import Active from './active';
import { NavbarContext } from './navbar-context';
import { Image, Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import useRedirect from '../../hooks/redirect';
import useWindowScroll from '../../hooks/window-scroll';

const NavbarUi = () => {
  const { active, landingRef, aboutRef, servicesRef, contactRef } = useContext(
    NavbarContext
  );
  const redirect = useRedirect();
  const { pageYOffset, top } = useWindowScroll();

  const links = [
    { name: 'home', ref: landingRef },
    { name: 'about', ref: aboutRef },
    { name: 'services', ref: servicesRef },
    { name: 'contact', ref: contactRef },
  ];

  const scrollTo = (ref) => {
    if (!ref.current) {
      redirect('/');
      return setTimeout(() => {
        window.scroll({
          top: ref.current.offsetTop - 75,
          behavior: 'smooth',
        });
      }, 750);
    }
    window.scroll({
      top: ref.current.offsetTop - 75,
      behavior: 'smooth',
    });
  };

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    if (expanded) {
      return setExpanded(false);
    }
    setExpanded(true);
  };

  const getNavStyles = () => {
    if (top)
      return {
        navbar: cssModule.navbarPosTop,
        nav: cssModule.navPosTop,
        brand: cssModule.brandPosTop,
      };
    return {
      navbar: cssModule.navbar,
      nav: cssModule.nav,
      brand: cssModule.brand,
    };
  };

  return (
    <Navbar
      collapseOnSelect
      bg='dark'
      expand='lg'
      fixed='top'
      variant='dark'
      expanded={expanded}
      className={getNavStyles().navbar}>
      <Navbar.Brand className={getNavStyles().brand}>
        <Image className={cssModule.logo} src={logo} roundedCircle />
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => toggleExpanded()} />
      <Navbar.Collapse>
        <Nav className={getNavStyles().nav}>
          {links.map((link) => (
            <Nav.Link
              className={active === link.name ? 'active' : ''}
              key={link.name}
              onClick={() => {
                scrollTo(link.ref);
                if (expanded) {
                  toggleExpanded();
                }
              }}>
              {link.name}
              {link.ref.current && (
                <Active
                  pageYOffset={pageYOffset}
                  offsetTop={link.ref.current.offsetTop - 200}
                  clientHeight={link.ref.current.clientHeight}
                  name={link.name}
                />
              )}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarUi;
