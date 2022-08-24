import React from "react";
import "./About.css";
import RishuImg from "../../Files/Theb0se.jpg";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2>ABOUT</h2>
        <div></div>
      </div>
      <div className="about-details">
        <div className="details-text">
          <p>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a BSC willing to be
            an asset for an organization.
          </p>
        </div>
        <div className="about-resm">
          <div className="left">
            <img src={RishuImg} alt="" srcset="" />
          </div>
          <div className="right">
            <h3>UI/UX Designer & Full Stack Developer.</h3>
            <p>
              I Am A Talented, Ambitious And Hardworking Individual, With Broad
              Skills And Experience In Frontend And Backend Development.
            </p>

            <div className="highlight">
              <h3>Here Some Key Skills </h3>
              <div className="highlight-container">
                <div className="high-left">
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span> Full Stack Web development</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Responsive Design</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span> Building REST API</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span> UI and UX Design</span>
                  </p>
                </div>
                <div className="high-right">
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>ReactJs</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Nodejs With Expressjs</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Authentication</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-chevron-right"></i>
                    <span>Adobe XD / Figma</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cta-btn">
              <button>
                {" "}
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  duration={35}
                >
                  <span>Hire Me</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
