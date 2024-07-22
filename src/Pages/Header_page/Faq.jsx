import React, { useState } from "react";
import Faq_data from "./Faq_data";
import "./Faq.css";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const mailid = email;
  sessionStorage.setItem("mail", mailid);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      Navigate("./Login");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <ul className="accordion">
        {Faq_data.map((faq, index) => (
          <li
            key={index}
            className={`item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="question" onClick={() => handleToggle(index)}>
              {faq.question}
              <span className="icon">{activeIndex === index ? "X" : "+"}</span>
            </div>
            <div className={`content ${activeIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>

      <div className="faq-form">
        <p>
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        <form className="email-signup">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Get Started </button>
        </form>
        <p className="err-message">{error}</p>
      </div>
    </div>
  );
};

export default Faq;
