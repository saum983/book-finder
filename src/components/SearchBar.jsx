import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import debounce from "lodash.debounce";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (q) => {
    if (!q) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(q)}&limit=5`
      );
      const data = await res.json();
      const titles = (data.docs || []).map((d) => d.title).slice(0, 5);
      setSuggestions(titles);
    } catch (err) {
      console.error("Suggestion fetch error:", err);
      setSuggestions([]);
    }
  };

  const debouncedSuggest = useMemo(
    () => debounce(fetchSuggestions, 300),
    []
  );

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    debouncedSuggest(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      console.log("SearchBar: submitting query:", trimmed);
      onSearch(trimmed);
      setSuggestions([]);
    } else {
      console.log("SearchBar: empty query submitted");
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="flex items-center flex-1 overflow-hidden rounded-full bg-white/20">
          <Search className="ml-3 text-white opacity-70" size={18} />
          <input
            type="text"
            placeholder="Search books by title..."
            value={query}
            onChange={handleChange}
            className="w-full p-3 text-white bg-transparent placeholder-white/70 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500"
        >
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 overflow-hidden bg-white rounded-lg shadow-lg">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-purple-100"
              onClick={() => {
                console.log("SearchBar: suggestion clicked:", s);
                setQuery(s);
                onSearch(s);
                setSuggestions([]);
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
