import React, { useState } from "react";
import Hero from "../components/Hero";
import BookModal from "../components/BookModal";
import BookList from "../components/BookList";
import { FaBookReader } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    const trimmedQuery = query.trim();
    setSearchQuery(trimmedQuery);

    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const formattedQuery = trimmedQuery.toLowerCase().split(" ").join("+");
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${formattedQuery}`
      );
      const data = await res.json();
      setSearchResults(data.docs.slice(0, 12));
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasValidSearch = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <Hero onSearch={handleSearch} />
      {hasValidSearch && (
        <section className="w-full px-6 py-16 rounded-lg shadow-2xl bg-gradient-to-br from-indigo-200 via-blue-500 to-sky-800 ">
          <h2 className="mb-8 text-4xl font-extrabold text-center text--600 drop-shadow-lg">
            Search Results for:{" "}
            <span className="italic text-pink-600">"{searchQuery}"</span>
          </h2>

          {loading ? (
            <p className="text-xl font-semibold text-center text-white animate-pulse">
              Searching...
            </p>
          ) : searchResults.length > 0 ? (
            <BookList books={searchResults} onSelectBook={setSelectedBook} />
          ) : (
            <p className="text-xl italic font-semibold text-center text-white">
              No results found.
            </p>
          )}
        </section>
      )}

      <section className="relative px-6 py-24 bg-gradient-to-br from-emerald-100 via-green-200 to-emerald-300 text-gray-900 overflow-hidden font-['Inter']">
        <div className="absolute top-[-80px] left-[-120px] w-[32rem] h-[32rem] bg-purple-400/30 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-60px] right-[-100px] w-[28rem] h-[28rem] bg-indigo-400/20 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#4C1D95] drop-shadow-md mb-16 font-['Playfair_Display'] flex items-center gap-4 justify-center">
            <FaBookReader className="w-10 h-10 text-[#F472B6]" /> Book of the
            Week
          </h2>

          <div className="flex flex-col-reverse items-center justify-center gap-14 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl text-left">
              <h3 className="text-3xl font-semibold text-[#4C1D95] mb-4 font-['Playfair_Display']">
                The Silent Patient
              </h3>
              <p className="text-xl leading-relaxed text-[#1E293B] mb-6">
                A chilling psychological thriller about a woman’s silence and a
                therapist's obsession to uncover the truth. This masterfully
                written novel keeps you hooked until the very last page.
              </p>

              <button
                aria-label="Learn more about The Silent Patient"
                className="inline-block px-6 py-3 text-base font-bold tracking-wide text-white uppercase transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-indigo-600 hover:to-purple-800"
                onClick={() =>
                  setSelectedBook({
                    title: "The Silent Patient",
                    author: "Alex Michaelides",
                  })
                }
              >
                Learn More
              </button>
            </div>
            <img
              src="https://covers.openlibrary.org/b/id/9874269-L.jpg"
              alt="Book cover of The Silent Patient by Alex Michaelides"
              className="w-64 transition-transform duration-300 transform shadow-2xl rounded-xl hover:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="relative px-8 py-28 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-950 text-gray-900 overflow-hidden font-['Open_Sans']">
        <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-purple-500/30 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[280px] h-[280px] bg-indigo-400/20 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-5xl font-bold text-yellow-200 font-['Merriweather'] drop-shadow-md flex items-center justify-center gap-4">
            <FaBookOpen className="w-10 h-10 text-yellow-300" /> Why Read Books?
          </h2>
          <p className="max-w-4xl mx-auto mb-16 text-2xl font-normal leading-relaxed text-yellow-100">
            Reading isn’t just entertainment — it’s a powerful journey that
            shapes your mind, heart, and soul. Unlock your potential, expand
            your horizons, and get inspired every day with a good book.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                title: "Learn",
                desc: "Gain wisdom that empowers your decisions and sharpens your intellect.",
                bgColor: "bg-rose-200",
                textColor: "text-rose-800",
              },
              {
                title: "Explore",
                desc: "Travel beyond borders and timelines all through captivating stories.",
                bgColor: "bg-sky-200",
                textColor: "text-sky-800",
              },
              {
                title: "Inspire",
                desc: "Fuel your creativity and discover new ideas that spark change.",
                bgColor: "bg-amber-200",
                textColor: "text-amber-800",
              },
              {
                title: "Focus",
                desc: "Enhance concentration and cultivate a mindful, reflective habit.",
                bgColor: "bg-green-200",
                textColor: "text-green-800",
              },
              {
                title: "Connect",
                desc: "Understand diverse perspectives and build empathy for others.",
                bgColor: "bg-violet-200",
                textColor: "text-violet-800",
              },
            ].map(({ title, desc, bgColor, textColor }) => (
              <div
                key={title}
                className={`${bgColor} ${textColor} p-8 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center min-w-[220px] min-h-[220px] max-w-[280px] max-h-[280px] mx-auto hover:shadow-2xl transition-shadow cursor-pointer`}
              >
                <h3 className="text-3xl font-bold mb-4 font-['Merriweather']">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed font-['Open_Sans']">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default Home;
