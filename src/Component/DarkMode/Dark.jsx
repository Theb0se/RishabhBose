import React, { useState, useContext, useEffect } from "react";
import "./Dark.css";
import DarkContext from "../../Context/DarkMode/DarkContext";

export default function Dark() {
  const [Dark, setDark] = useState(false);
  const D = useContext(DarkContext);
  const setDarkMode = () => {
    if (!Dark) {
      setDark(true);
    } else {
      setDark(false);
    }
    D.update();
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const useDarkMode = mq.matches;
    if (!useDarkMode) {
      setDark(true);
    } else {
      setDark(false);
    }
   
  }, []);

  return (
    <div className="dark-mode" onClick={setDarkMode}>
      {Dark ? (
        <i class="fa-solid fa-sun"></i>
      ) : (
        <i class="fa-solid fa-moon"></i>
      )}
    </div>
  );
}
