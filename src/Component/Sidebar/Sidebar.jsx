import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";

export default function Sidebar() {
  const [ham, setham] = useState(false);
  const [menu, setmenu] = useState(false);

  const hamHandle = () => {
    if (!ham) {
      setham(true);
      setmenu(true);
    } else {
      setham(false);
      setmenu(false);
    }
  };

  return (
    <div className="sidebar">
      <div className={ham ? "hamicon ham-open" : "hamicon"} onClick={hamHandle}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      <div className={menu ? "side open" : "side"}>
        <div className="navbar">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={35}
                onClick={hamHandle}
              >
                {" "}
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                duration={35}
                onClick={hamHandle}
              >
                {" "}
                <i class="fa-solid fa-person"></i>
                <span>About</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="resume"
                activeClass="active"
                smooth={true}
                duration={35}
                onClick={hamHandle}
              >
                {" "}
                <i class="fa-regular fa-file"></i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                duration={35}
                onClick={hamHandle}
              >
                {" "}
                <i class="fa-solid fa-bars-progress"></i>
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                duration={35}
                onClick={hamHandle}
              >
                {" "}
                <i class="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
