import { React, useState, useEffect } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [DarkModeOn, setDarkModeOn] = useState(false);

  const update = () => {
    if (!DarkModeOn) {
      setDarkModeOn(true);
    } else {
      setDarkModeOn(false);
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const useDarkMode = mq.matches;
    if (useDarkMode) {
      setDarkModeOn(true);
    } else {
      setDarkModeOn(false);
    }
  }, []);

  return (
    <DarkContext.Provider value={{ DarkModeOn, update }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
