import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaGlobe,
  FaLightbulb,
  FaLaptopCode,
  FaFlask,
  FaLandmark,
  FaUserTie,
  FaChild,
  FaStar,
  FaBolt,
  FaHeart,
} from "react-icons/fa";

const categories = [
  { name: "Fiction", icon: <FaBook /> },
  { name: "Non-Fiction", icon: <FaGlobe /> },
  { name: "Self-Help", icon: <FaLightbulb /> },
  { name: "Technology", icon: <FaLaptopCode /> },
  { name: "Science", icon: <FaFlask /> },
  { name: "History", icon: <FaLandmark /> },
  { name: "Biography", icon: <FaUserTie /> },
  { name: "Children", icon: <FaChild /> },
];

const features = [
  { title: "Curated Books", desc: "Handpicked selections across genres.", icon: <FaStar /> },
  { title: "Fast Discovery", desc: "Find books you’ll love in seconds.", icon: <FaBolt /> },
  { title: "Personalized Picks", desc: "Recommendations tailored to you.", icon: <FaHeart /> },
];

export default function CategoriesPage() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://openlibrary.org/search.json?q=bestseller");
        const data = await res.json();

        const books = data.docs.slice(0, 8).map((b) => ({
          title: b.title,
          author: b.author_name ? b.author_name[0] : "Unknown Author",
          cover: b.cover_i
            ? `https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover",
        }));

        setRecommendedBooks(books);
      } catch (error) {
        console.error(" Failed to fetch recommended books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="relative w-full min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative mx-auto space-y-20 max-w-7xl">

        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-300 to-red-400 drop-shadow-lg">
             Explore Categories
          </h1>
          <p className="max-w-4xl mx-auto mt-4 text-2xl font-bold text-yellow-100">
            Dive into a world of books — from thrilling fiction to mind-expanding science.
            Pick a category and start exploring knowledge and stories.
          </p>
        </div>

        <div className="p-10 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-pink-300 via-pink-600 to-red-500 rounded-3xl">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-100">Choose a Category</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col items-center justify-center p-6 font-semibold text-center text-gray-800 transition-transform transform cursor-pointer rounded-2xl bg-gradient-to-br from-pink-100 via-purple-200 to-purple-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/40"
              >
                <div className="mb-3 text-4xl text-purple-600 drop-shadow-lg">{cat.icon}</div>
                <span className="text-lg font-bold text-gray-900">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Why Explore with Book Finder?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 text-gray-800 transition-transform shadow-xl rounded-2xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-4xl text-blue-800">{f.icon}</div>
                <h3 className="mb-2 text-2xl font-semibold text-blue-800">{f.title}</h3>
                <p className="font-semibold text-blue-900">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-10 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
            Recommended Reads
          </h2>

          {loading ? (
            <p className="text-center text-gray-800 animate-pulse">Loading books...</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedBooks.map((book, i) => (
                <div
                  key={i}
                  className="p-4 text-center transition-transform transform shadow-lg rounded-2xl bg-gradient-to-br from-red-100 via-yellow-100 to-orange-100 hover:scale-105 hover:shadow-pink-400/30"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="object-cover w-full h-48 mb-4 rounded-md shadow"
                  />
                  <h3 className="text-lg font-extrabold text-yellow-900">{book.title}</h3>
                  <p className="text-sm font-bold text-yellow-900">{book.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
