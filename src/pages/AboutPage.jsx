import React from "react";
import { FaBookOpen, FaRocket, FaUsers, FaSearch } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen px-6 py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto space-y-16 text-center">
        <div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 drop-shadow-lg">
           About Book Finder
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl font-medium text-gray-100">
            Book Finder is your ultimate destination to discover, explore, and fall in love with books again. 
            Whether you're a casual reader or a passionate bookworm, we connect you with knowledge, stories, 
            and ideas that inspire growth and curiosity.
          </p>
        </div>

        <div className="p-10 text-pink-900 shadow-2xl rounded-3xl bg-gradient-to-br from-pink-100 via-purple-200 to-purple-300">
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
          <p className="max-w-4xl mx-auto text-xl font-semibold text-pink-900">
            Our mission is to make the world’s knowledge accessible to everyone. 
            We believe books are not just pages with words, they are bridges to imagination, 
            wisdom, and innovation. With Book Finder, we make discovering new stories effortless and fun.
          </p>
        </div>

        <div>
          <h2 className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            What Makes Us Different?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 transition-transform shadow-xl rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-100 hover:scale-105">
              <FaSearch className="mx-auto mb-4 text-4xl text-yellow-700" />
              <h3 className="text-xl font-extrabold text-yellow-900">Smart Discovery</h3>
              <p className="mt-2 font-semibold text-yellow-900">
                Explore books faster with intelligent search and curated recommendations.
              </p>
            </div>
            <div className="p-8 transition-transform shadow-xl rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 hover:scale-105">
              <FaBookOpen className="mx-auto mb-4 text-4xl text-purple-700" />
              <h3 className="text-xl font-extrabold text-purple-900">Diverse Categories</h3>
              <p className="mt-2 font-semibold text-purple-900">
                From timeless classics to modern tech, find books across every genre.
              </p>
            </div>
            <div className="p-8 transition-transform shadow-xl rounded-2xl bg-gradient-to-br from-red-100 to-red-300 hover:scale-105">
              <FaUsers className="mx-auto mb-4 text-4xl text-red-700" />
              <h3 className="text-xl font-extrabold text-red-900">Community Driven</h3>
              <p className="mt-2 font-semibold text-red-900">
                Join readers worldwide in discovering and sharing book recommendations.
              </p>
            </div>
            <div className="p-8 transition-transform shadow-xl rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:scale-105">
              <FaRocket className="mx-auto mb-4 text-4xl text-green-700" />
              <h3 className="text-xl font-extrabold text-green-900">Future Ready</h3>
              <p className="mt-2 font-semibold text-green-900">
                Stay ahead with AI-powered book suggestions tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
