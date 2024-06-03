// utils/isIOS.js
export const isIOS = () => {
    if (typeof window !== 'undefined') {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    return false; // Return false if running on the server or in an environment without window/navigator
  };