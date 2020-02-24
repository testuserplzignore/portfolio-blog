import { useState, useEffect } from "react";

export const atTopOfPage = () => {
  const [state, setState] = useState(true);

  const listenToScroll = () => {
    if (window.pageYOffset !== 0) {
      setState(false);
    } else {
      setState(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  return state;
};

export const atEndOfPage = () => {
  const [endOfPage, setEndOfPage] = useState(false);

  const endOfPageStateHandler = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setEndOfPage(true);
    } else {
      setEndOfPage(false);
    }
  };

  useEffect(() => {
    endOfPageStateHandler();
    window.addEventListener("scroll", endOfPageStateHandler);
    return () => {
      window.removeEventListener("scroll", endOfPageStateHandler);
    };
  });

  return endOfPage;
};

export const atTopOfScrollablePage = () => {

  if (typeof window !== "undefined"){
    const stateLogic = () => {
      const scrollable = !(window.innerHeight >= document.body.offsetHeight);
      const scrolled = window.pageYOffset !== 0;
      if (scrollable) {
        if (scrolled) {
          return (false);
        } else {
          return (true);
        }
      } else {
        return (false);
      }
    };
    const [state, setState] = useState(stateLogic());
  
    const stateHandler = () => {setState(stateLogic())};
  
    useEffect(() => {
      stateHandler();
      window.addEventListener("scroll", stateHandler);
      window.addEventListener("resize", stateHandler);
      return () => {
        window.removeEventListener("scroll", stateHandler);
        window.removeEventListener("resize", stateHandler);
      };
    });
    
    return state;
  };
};

