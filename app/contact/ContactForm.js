"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setStatus("Your message has been sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto bg-purple-100 p-6 rounded-lg"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-md focus:outline-purple-600"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded-md focus:outline-purple-600"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-4 py-2 rounded-md focus:outline-purple-600"
        required
      />
      <button
        type="submit"
        className="bg-purple-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-purple-600 transition"
      >
        Send
      </button>
      {status && <p className="text-green-700 text-center">{status}</p>}
    </form>
  );
}
