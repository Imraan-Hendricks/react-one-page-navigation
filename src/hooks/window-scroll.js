import { useEffect, useState } from 'react';

const WindowScroll = () => {
  const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);
  const [prevYOffset, setPrevYOffset] = useState(window.pageYOffset);
  const [scrollDirection, setScrollDirection] = useState(undefined);
  const [top, setTop] = useState(true);

  useEffect(
    () =>
      window.addEventListener('scroll', () =>
        setPageYOffset(window.pageYOffset)
      ),
    []
  );

  useEffect(
    () => () =>
      window.removeEventListener('scroll', () =>
        setPageYOffset(window.pageYOffset)
      ),
    []
  );

  useEffect(() => {
    if (pageYOffset === prevYOffset) return;

    if (pageYOffset < prevYOffset) setScrollDirection('up');
    else setScrollDirection('down');

    setPrevYOffset(pageYOffset);
  }, [prevYOffset, pageYOffset]);

  useEffect(() => {
    if (pageYOffset === 0) return setTop(true);
    setTop(false);
  }, [pageYOffset, setTop]);

  return { pageYOffset, scrollDirection, top };
};

export default WindowScroll;
