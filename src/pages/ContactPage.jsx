import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full min-h-screen px-6 py-20 bg-gradient-to-r from-pink-300 via-purple-400 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">
             Contact Us
          </h1>
          <p className="max-w-3xl mx-auto mt-4 font-semibold text-2xl text-yellow-900">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
            fill out the form below or reach out via our social channels.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-[#017380] shadow-lg"
          >
            {submitted && (
              <p className="text-lg font-bold text-pink-200">
                Thank you! Your message has been sent.
              </p>
            )}
            <div>
              <label className="block mb-2 text-xl font-medium text-pink-900">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 text-pink-900 font-semibold bg-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-pink-900">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 text-pink-900 font-semibold bg-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-xl font-medium text-pink-900">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 text-pink-900 font-semibold bg-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white transition-transform rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-purple-900 hover:scale-105"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-6 text-xl font-semibold text-green-900">
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-8 h-8 text-green-900" />
              <span>contact@bookfinder.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-6 h-6 text-green-900" />
              <span>+91-9876987612</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-8 h-7 text-green-900" />
              <span>123 Book Street, Library City, 12345</span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="transition-colors hover:text-pink-900">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors hover:text-pink-900">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors hover:text-pink-900">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}