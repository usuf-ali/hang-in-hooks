// import { useEffect, useState } from "react";
// export const useWindowWidth = (screenSize) => {
//   const [onSmallScreen, setOnsmallScreen] = useState(false);
//   useEffect(() => {
//     const toggleScreen = () => {
//       setOnsmallScreen(window.innerWidth < screenSize)
//     };
//     window.addEventListener('resize', toggleScreen())
//     return window.removeEventListener('resize', toggleScreen());
//   }, [screenSize])
//   return onSmallScreen
// };

import { useCallback, useEffect, useState } from "react";
import React from 'react';



const useWindowWidth = () => {
  const [onSmallScreen, setOnsmallScreen] = useState(false);
  const Name = () => {
  }


}
export default useWindowWidth;
