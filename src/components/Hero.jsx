import React from "react";
import SearchBar from "./SearchBar";
import { FaBookOpen } from "react-icons/fa";

export default function Hero({ onSearch }) {
  return (
    <section className="relative py-20 text-white bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600">
      <div className="container px-6 mx-auto text-center">
        <h1 className="flex items-center justify-center gap-3 mb-6 text-5xl font-extrabold sm:text-6xl">
          Discover Your Next Favorite Book <FaBookOpen className="w-10 h-10" />
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg sm:text-xl text-white/90">
          Search millions of books by title, author, or year. Explore editions
          and dive into knowledge.
        </p>

        <div className="max-w-3xl mx-auto">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}
