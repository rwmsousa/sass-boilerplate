import { useEffect, useState } from 'react';

const useMedia = (param: string) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.matchMedia(param).matches);
    };

    checkForMobile();

    window.addEventListener('resize', checkForMobile);

    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  return isMobile;
};

export default useMedia;
