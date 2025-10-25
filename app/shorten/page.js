"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Shorten() {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const normalizeShort = (text) => {
    return text.trim().toLowerCase().replace(/\s+/g, "-"); 
  };

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please fill in both fields!");
      return;
    }

    const normalizedShort = normalizeShort(shorturl);

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: normalizedShort }),
      });

      const result = await res.json();

      if (result.success) {
        const fullLink = `${process.env.NEXT_PUBLIC_HOST}/${normalizedShort}`;
        setGenerated(fullLink);
        setUrl("");
        setShortUrl("");
        setMessage("✅ " + result.message);
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-center">Generate your short URLs</h1>

      <div className="flex flex-col gap-3">
        <input
          type="url"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your full URL (e.g. https://example.com)"
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <button
          onClick={generate}
          disabled={loading}
          className={`bg-purple-500 rounded-lg shadow-lg p-3 font-bold text-white transition hover:bg-purple-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {message && <p className="text-center text-sm mt-2">{message}</p>}

      {generated && (
        <div className="mt-4 text-center">
          <span className="font-bold text-lg">Your Link: </span>
          <code className="text-purple-700">
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
}
