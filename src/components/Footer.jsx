import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 text-gray-300 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="grid grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-4">
        <div>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-purple-400">
            <FaBook className="w-6 h-6 text-purple-300" /> Book Finder
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Discover books fast, fuel your curiosity, and open new worlds —
            powered by the OpenLibrary API.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-purple-400">
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-400">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-200">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-200">Connect</h3>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@bookfinder.com"
              className="hover:text-purple-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-12 text-sm text-center text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Book Finder. All rights reserved.
        <span className="block mt-1">Powered by OpenLibrary API</span>
      </div>
    </footer>
  );
}
