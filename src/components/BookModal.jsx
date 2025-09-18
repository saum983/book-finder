import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function BookModal({ book, onClose }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/300x420?text=No+Cover";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <MotionDiv
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <MotionDiv
        className="relative z-10 w-full max-w-4xl mx-4 overflow-auto border border-gray-200 shadow-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex gap-6 p-6">
          <img
            src={cover}
            alt={book.title}
            className="flex-shrink-0 object-cover h-64 rounded-md shadow-md w-44"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{book.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {book.author_name?.join(", ") || "Unknown author"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-xl text-gray-600 transition dark:text-gray-300 hover:text-red-500"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>First published:</strong> {book.first_publish_year || "N/A"}</p>
              <p><strong>Editions:</strong> {book.edition_count || "N/A"}</p>
              <p><strong>Languages:</strong> {book.language?.join(", ") || "N/A"}</p>
              <p><strong>Subjects (sample):</strong> {(book.subject || []).slice(0, 6).join(", ") || "N/A"}</p>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                View on OpenLibrary
              </a>
              <button
                onClick={() =>
                  window.open(
                    `https://openlibrary.org/search?q=${encodeURIComponent(book.title)}`,
                    "_blank"
                  )
                }
                className="px-4 py-2 transition border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Search similar
              </button>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
