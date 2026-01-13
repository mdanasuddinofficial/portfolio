"use client";

import { useState } from "react";


export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur text-white flex justify-center gap-6 py-4 z-50">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button
          onClick={() => setDark(!dark)}
          className="text-xl ml-4 hover:scale-110 transition"
          aria-label="Toggle Dark Mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/profile.jpg"
          className="w-32 h-32 rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold">Md. Anas Uddin</h1>
        <p className="text-gray-400 mt-3">
          Beginner Web Developer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a beginner web developer learning how to build modern websites.
          This portfolio is created using Next.js and Tailwind CSS.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="text-gray-400 space-y-2">
          <li>HTML (Basic)</li>
          <li>CSS (Basic)</li>
          <li>JavaScript (Beginner)</li>
          <li>Next.js (Learning)</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <p className="text-gray-400">
          Personal Portfolio Website (This Website)
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <ContactForm />
      </section>

    </main>
  );
}

function ContactForm() {
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
        className="w-full p-3 bg-gray-800 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 bg-gray-800 rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-3 bg-gray-800 rounded"
      ></textarea>

      <button
        type="submit"
        className="bg-white text-black px-6 py-2 rounded"
      >
        Send Message
      </button>
    </form>
  );
}
