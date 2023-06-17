import { FC, ReactNode, useEffect } from 'react';

import Hotjar from '@hotjar/browser';

interface HotjarWrapperProps {
  children: ReactNode;
}

const HotjarWrapper: FC<HotjarWrapperProps> = ({ children }) => {
  const siteId = 3516488;
  const hotjarVersion = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      Hotjar.init(siteId, hotjarVersion);
      console.info('Hotjar initialized');
    }, 5000); // initialize after 5 seconds

    // cleanup on component unmount
    return () => clearTimeout(timer);
  }, []); // only on component mount

  return (
    <>
      {children}
    </>
  );
};


export default HotjarWrapper;
