import { useEffect, useState } from "react";
export const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setOnsmallScreen] = useState(false);
  useEffect(() => {
    const toggleScreen = () => {
      setOnsmallScreen(window.innerWidth < screenSize)
    };
    window.addEventListener('resize', toggleScreen())
    return window.removeEventListener('resize', toggleScreen());
  }, [screenSize])
  return onSmallScreen
};
