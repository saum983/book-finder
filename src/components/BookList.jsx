import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books, onSelectBook }) {
  return (
    <div className="px-6 py-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, i) => (
          <BookCard key={i} book={book} onClick={onSelectBook} />
        ))}
      </div>
    </div>
  );
}
