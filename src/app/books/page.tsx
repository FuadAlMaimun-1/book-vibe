import React from "react";
import BookCard from "@/components/shared/BookCard";
import { IBooks } from "@/type/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

const Books = async () => {
  const books = await getBooks();

  return (
    <div>
      <h2 className="text-center font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        Explore Our All <span className="text-[#23BE0A]">Books</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-15">
        {books.map((book: IBooks) => (
          <BookCard key={book.bookId} books={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
