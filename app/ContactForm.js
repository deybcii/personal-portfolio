"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio inquiry from " + name);
    const body = encodeURIComponent(
      "From: " + name + " (" + email + ")\n\n" + message
    );
    window.location.href =
      "mailto:quinzondavebrian.2499@gmail.com?subject=" +
      subject +
      "&body=" +
      body;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Your name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Your email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </label>
      <button type="submit" className="btn-primary">
        Send message
      </button>
      <p className="form-note">
        This opens your email app with the message ready to send. Nothing is
        stored on this site.
      </p>
    </form>
  );
}
