"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur transition-colors
        ${dark ? "bg-black text-white" : "bg-white text-black shadow"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center py-4 gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <img src="/profile.jpg" className="w-32 h-32 rounded-full mb-6" />
        <h1 className="text-4xl font-bold">Md. Anas Uddin</h1>
        <p className={dark ? "text-gray-400 mt-3" : "text-gray-600 mt-3"}>
          Beginner Web Developer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className={dark ? "text-gray-400" : "text-gray-700"}>
          I am a beginner web developer learning how to build modern websites.
          This portfolio is created using Next.js and Tailwind CSS.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className={dark ? "text-gray-400 space-y-2" : "text-gray-700 space-y-2"}>
          <li>HTML (Basic)</li>
          <li>CSS (Basic)</li>
          <li>JavaScript (Beginner)</li>
          <li>Next.js (Learning)</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <p className={dark ? "text-gray-400" : "text-gray-700"}>
          Personal Portfolio Website (This Website)
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <ContactForm dark={dark} />
      </section>

      {/* THEME BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: dark ? "#ffffff" : "#000000",
          color: dark ? "#000000" : "#ffffff",
          border: "2px solid #000000",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </main>
  );
}

function ContactForm({ dark }: { dark: boolean }) {

  return (
    <form
      action="https://formspree.io/f/mgooeqnl"
      method="POST"
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className={`w-full p-3 rounded ${
          dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className={`w-full p-3 rounded ${
          dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      />

      <textarea
        name="message"
        placeholder="Message"
        className={`w-full p-3 rounded ${
          dark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      ></textarea>

      <button
        type="submit"
        className={`px-6 py-2 rounded ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Send Message
      </button>
    </form>
  );
}
