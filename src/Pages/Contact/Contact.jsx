import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_axo5p1r",
        "template_my78pow",
        formRef.current,
        "Vkvlz1IH93sFNaoDG"
      )
      .then(
        (result) => {
          console.log(result);
          setDone(true);
          setInputValue("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="chd">
        <div className="about-heading">
          <h2>CONTACT</h2>
          <div></div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="location cl">
            <a href="https://goo.gl/maps/zmi6VS1wbRcR3m7b6">
              <div>
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <span>
                <h4>Location :</h4>
                <p>
                  Digma, Near Engineering College, <br /> Ambikapur,
                  Chhattisgarh 497001
                </p>{" "}
              </span>
            </a>
          </div>
          <div className="email cl">
            <a href="mailto:Rishabhbose3@gmail.com">
              <div>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <span>
                <h4>Email :</h4>
                <p>Rishabhbose3@gmail.com</p>
              </span>
            </a>
          </div>
          <div className="phone cl">
            <a href="tel:+919754472611">
              <div>
                {" "}
                <i class="fa-solid fa-mobile-screen-button"></i>
              </div>
              <span>
                <h4>Call :</h4>
                <p> 9754472611</p>
              </span>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <div className="greeting">
            <p>{done && "Thank you for getting in touch!"}</p>
            <p>{done && "I will get back in touch with you soon!"}</p>
            <span>{done && " Have a great day!"}</span>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="first">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                value={inputValue}
                required={true}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                value={inputValue}
                required={true}
              />
            </div>
            <div className="second">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={inputValue}
                required={true}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={inputValue}
              required={true}
            ></textarea>
            <div className="contact-submit">
              <button type="submit">
                Send <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
