import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

import ReactTypingEffect from "react-typing-effect";
import Dark from "../../Component/DarkMode/Dark";

export default function Home() {
  return (
    <div className="home">
      <Dark />
      <div className="home-text">
        <h1>
          Hello!
          <br />
          <span>I'M Rishabh Bose</span>
        </h1>
        <ReactTypingEffect
          text={[
            "Web Developer",
            "UI/Ux Designer",
            "MERN Stack Developer",
            "React Developer",
            "Freelancer",
            "Photographer",
          ]}
          speed={80}
          eraseSpeed={80}
          eraseDelay={1000}
          typingDelay={20}
        />
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/theb0se"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/theb0se/?utm_medium=copy_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/Rishabhbose1?t=pBEwgM2P0R0Tl8MTZfzIHw&s=09"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rishabhbose3107"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://wa.me/+919754472611"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href="https://github.com/Theb0se"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="cta-btn">
        <button>
          <Link to="contact" activeClass="active" smooth={true} duration={35}>
            <span>Hire Me</span>
          </Link>
        </button>
        <button>
          <a href="RISHABH_RESUME.pdf" download="Resume.pdf">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
