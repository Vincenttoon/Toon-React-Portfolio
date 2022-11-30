import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="contact-cont">
      <h1 className="contact-h1" data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="name-div">
          <label className="name" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="name-input"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="name-div email-div">
          <label className="name" htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            className="name-input"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label className="message" htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            className="message-area"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="submit-btn" data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;