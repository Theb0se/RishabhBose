import "./App.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import React, { useContext } from "react";

import DarkContext from "./Context/DarkMode/DarkContext";

function App() {
  const D = useContext(DarkContext);
  return (
    <div className={D.DarkModeOn ? "App DarkApp" : "App"}>
      <Sidebar />
      <Home />
      <About />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
