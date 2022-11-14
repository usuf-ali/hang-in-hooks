import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [onSmallScreen, setOnsmallScreen] = useState(false);
  const toggleScreen = () => {
    setOnsmallScreen(window.innerWidth < 600)
  };
  useEffect(() => {
    window.addEventListener('resize', toggleScreen())
    return window.removeEventListener('resize', toggleScreen());
  }, [])
  return onSmallScreen
};
