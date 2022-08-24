import React from "react";
import { Link } from "react-scroll";
import "./Top.css";

export default function Top() {
  return (
    <Link to="home" activeClass="active" smooth={true} duration={35}>
      <div className="top-scroll">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </Link>
  );
}
