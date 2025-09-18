import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const BookCard = ({ book, onClick }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x220.png?text=No+Cover";

  return (
    <MotionDiv
      layout
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden border shadow-lg cursor-pointer group bg-white/5 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl border-white/6 aspect-square"
      onClick={() => onClick?.(book)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={coverUrl}
          alt={book.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-sm text-white">
        <h3 className="font-semibold truncate">{book.title}</h3>
        <p className="text-gray-300 truncate">
          {book.author_name?.[0] || "Unknown Author"}
        </p>
        <p className="text-gray-500">
          Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </MotionDiv>
  );
};

export default BookCard;
