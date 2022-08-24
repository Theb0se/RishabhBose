import React from "react";
import Top from "../../Component/TopScroll/Top";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="name">
        <h1>Rishabh Bose</h1>
        <p>Full Stack Developer | Freelancer | Photographer</p>
      </div>

      <div className="footer-social-link">
        <a
          href="https://www.facebook.com/theb0se"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </a>
        <a
          href="https://www.instagram.com/theb0se/?utm_medium=copy_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
        <a
          href="https://twitter.com/Rishabhbose1?t=pBEwgM2P0R0Tl8MTZfzIHw&s=09"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rishabhbose3107"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </a>
        <a
          href="https://wa.me/+919754472611"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </a>
        <a
          href="https://github.com/Theb0se"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <i class="fa-brands fa-github"></i>
          </div>
        </a>
      </div>

      <div className="copyright">
        <p>© Copyright. All Rights Reserved</p>
        <p>
          Made with ❤ by <span>Rishabh Bose</span>
        </p>
      </div>
      <Top />
    </div>
  );
}
