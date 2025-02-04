import React from "react";
import { useForm } from "@formspree/react";

const Feedback = () => {
  // Replace 'yourformid' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("sanjithsece@gmail.com");

  if (state.succeeded) {
    return (
      <div className="feedback">
        <h2>Feedback</h2>
        <p>Thank you for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Feedback"
          rows="4"
          required
        ></textarea>
        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Feedback"}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
