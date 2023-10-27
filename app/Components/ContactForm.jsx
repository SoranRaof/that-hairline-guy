"use client";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInput(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    for (let [key, value] of Object.entries(formInput)) {
      formData.append(key, value);
    }

    await axios
      .post(
        "https://formeezy.com/api/v1/forms/653be4fc33e4010008dadaef/submissions",
        formData
      )
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      });
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="name"
          placeholder="Enter Name"
          onChange={handleInput}
          value={formInput.name}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleInput}
          value={formInput.email}
          required
        />
        <textarea
          name="message"
          placeholder="Enter message"
          onChange={handleInput}
          value={formInput.message}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
