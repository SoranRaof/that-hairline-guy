"use client";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preference: "",
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
    <div className="mx-auto max-w-2xl px-4 my-10 rounded-lg shadow-lg p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-4 w-full">
          <label className="text-md font-bold" htmlFor="firstName">
            First name
          </label>
          <input
            className="p-4 rounded-lg border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="firstName"
            type="firstName"
            placeholder="First name"
            onChange={handleInput}
            value={formInput.firstName}
            minLength={3}
            maxLength={20}
            required
          />
        </div>
        <div className="flex flex-col my-4 w-full">
          <label className="text-md font-bold" htmlFor="lastName">
            Last name
          </label>
          <input
            className="p-4 rounded border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="lastName"
            type="lastName"
            placeholder="Last name"
            onChange={handleInput}
            value={formInput.lastName}
            minLength={3}
            maxLength={20}
            required
          />
        </div>
        <div className="flex flex-col my-4 w-full">
          <label className="text-md font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="p-4 rounded border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInput}
            value={formInput.email}
            required
            maxLength={50}
          />
        </div>
        <div className="flex flex-col my-4 w-full">
          <label className="text-md font-bold" htmlFor="phone">
            Phone
          </label>
          <input
            className="p-4 rounded border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="phone"
            type="phone"
            placeholder="Phone"
            onChange={handleInput}
            value={formInput.phone}
            required
          />
        </div>
        <div className="flex flex-col my-4 w-full">
          <label className="text-md font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            minLength={5}
            maxLength={500}
            className="p-4 rounded border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="message"
            placeholder="Message"
            onChange={handleInput}
            value={formInput.message}
            required
          />
        </div>
        <div className="flex flex-col w-fit">
          <label className="text-md font-bold" htmlFor="preference">
            Preferred contact:
          </label>
          <select
            className="p-3 rounded border-2 bg-gray-50 focus:border-sage focus:border-2 focus:outline-none"
            name="preference"
            onChange={handleInput}
            value={formInput.preference}
            required
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </div>
        <button
          className="rounded text-lg text-white bg-sage w-full p-4 my-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
