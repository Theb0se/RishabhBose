import React, { useState } from "react";
import "./Resume.css";

const Resume = () => {
  const [Active, setActive] = useState("resume-details-slider");
  const handleToggleEdu = () => {
    setActive("resume-details-slider");
  };
  const handleTogglePro = () => {
    setActive("resume-details-slider1");
  };
  const handleToggleSki = () => {
    setActive("resume-details-slider2");
  };
  const handleToggleInt = () => {
    setActive("resume-details-slider3");
  };


  return (
    <div className="resume-sec" id="resume">
      <div className="resume-title">
        <div className="about-heading">
          <h2>RESUME</h2>
          <div></div>
        </div>
        <div className="sapreting-line">
          <div className="sap-line"></div>
          <div className="sap-bub">
            <div></div>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <div className="resume-left">
          <div className="left-container">
            <div className="bullet-icon"></div>
            <div className="bullets">
              <div className="bullet">
                <h1>
                  {" "}
                  <i
                    class="fa-solid fa-graduation-cap "
                    onClick={handleToggleEdu}
                  ></i>
                </h1>
                <span onClick={handleToggleEdu}>Education</span>
              </div>
              <div className="bullet">
                <h1>
                  {" "}
                  <i
                    class="fa-solid fa-chart-line"
                    onClick={handleTogglePro}
                  ></i>
                </h1>
                <span onClick={handleTogglePro}>Projects</span>
              </div>
              <div className="bullet">
                <h1>
                  {" "}
                  <i
                    class="fa-solid fa-laptop-code"
                    onClick={handleToggleSki}
                  ></i>
                </h1>
                <span onClick={handleToggleSki}>Skills</span>
              </div>
              <div className="bullet">
                <h1>
                  {" "}
                  <i class="fa-solid fa-palette" onClick={handleToggleInt}></i>
                </h1>
                <span onClick={handleToggleInt}>Intrests</span>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-right">
          <div className={Active}>
            {/* EDUCATION DETAILS */}
            <div className="resume-details-container education">
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>SSTC BHILAI (CSVTU)</span>
                  <div className="heading-date">2016 - 2020</div>
                </div>
                <div className="res-sub-heading">
                  <span>
                    BACHELOR OF TECHNOLOGY , ELECTRONICS & COMMUNICATION
                  </span>
                </div>
                <div className="discription"></div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>CGBSE RAIPUR</span>
                  <div className="heading-date">2015 - 2016</div>
                </div>
                <div className="res-sub-heading">
                  <span>HIGHER SECONDARY SCHOOL (SCIENCE)</span>
                </div>
                <div className="discription"></div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>CGBSE RAIPUR</span>
                  <div className="heading-date">2013 - 2014</div>
                </div>
                <div className="res-sub-heading">
                  <span>HIGH SCHOOL</span>
                </div>
                <div className="discription"></div>
              </div>
            </div>
            {/* PROJECT DETAILS */}
            <div className="resume-details-container">
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Personal Portfolio Website</span>
                  <div className="heading-date">2021-2022</div>
                </div>
                <div className="res-sub-heading">
                  <span>Technologies Used: React JS, Bootsrap</span>
                </div>
                <div className="discription">
                  <span>
                    A Personal Portfolio website to showcase all my details and
                    projects at one place.
                  </span>
                </div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Restaurent / Catering Website</span>
                  <div className="heading-date">2021-2022</div>
                </div>
                <div className="res-sub-heading">
                  <span>
                    Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
                    Redux, Bootstrap.
                  </span>
                </div>
                <div className="discription">
                  <span>
                    Online Restaurent website for showcasing and selling
                    products onlne with payment system integration.
                  </span>
                </div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Travels / Cab Service Website.</span>
                  <div className="heading-date">2016-2020</div>
                </div>
                <div className="res-sub-heading">
                  <span>
                    Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
                    Redux, Bootstrap.
                  </span>
                </div>
                <div className="discription">
                  <span>
                    Online Restaurent Landing website for showcasing products
                  </span>
                </div>
              </div>
            </div>
            {/* SKILLS */}
            <div className="resume-details-container skills-container">
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>HTML</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>CSS</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>JAVASCRIPT</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>NODEJS</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>REACTJS</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "76%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>EXPRESS</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>MONGODB</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-parent">
                <div className="heading-bullet"></div>
                <span>BOOTSTRAP</span>
                <div className="skill-percentage">
                  <div
                    className="skill-percentage-bar"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Intrest section */}
            <div className="resume-details-container">
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Reading Books</span>
                </div>
                <div className="res-sub-heading">
                  <span>
                    Apart from being a tech enthusiast and a code writer, i also
                    love to Reading Books Like Novel , Fiction , Thriller etc.
                  </span>
                </div>
                <div className="discription"></div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Music</span>
                </div>
                <div className="res-sub-heading">
                  <span>
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </span>
                </div>
                <div className="discription"></div>
              </div>
              <div className="details-heading">
                <div className="main-heading">
                  <div className="heading-bullet"></div>
                  <span>Gaming</span>
                </div>
                <div className="res-sub-heading">
                  <span>
                    I like to challenge my reflexes a lot while competing in
                    football games, pushing the rank and having interactive
                    gaming sessions excites me the most.
                  </span>
                </div>
                <div className="discription"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
