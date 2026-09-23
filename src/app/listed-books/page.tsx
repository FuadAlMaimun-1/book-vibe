"use client";

import { useContext, useState } from "react";

import { BooksContext } from "@/context/BooksContext";
import { IBooks } from "@/type/books.type";
import ListedBookCard from "@/components/shared/ListedBookCard";

const ListedPage = () => {

  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  // Sort Books 
  const sortBooks = (books: IBooks[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortReadBooks = sortBooks(readBooks);
  const sortWishlistBooks = sortBooks(wishlist);

  // Active Tab 
  const displayedBooks = activeTab === "read" ? sortReadBooks : sortWishlistBooks;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header Banner  */}
      <div className="mb-8 rounded-2xl bg-gray-100 py-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Books</h1>
      </div>

      {/* Sort Dropdown */}
      <div className="mb-8 text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      {/* ================= Tabs ================= */}
      <div
        role="tablist"
        className="tabs tabs-lift mb-8"
      >
        {/* Read Books */}
        <button
          type="button"
          role="tab"
          onClick={() => setActiveTab("read")}
          className={`tab ${
            activeTab === "read"
              ? "tab-active font-bold text-[#23BE0A]"
              : ""
          }`}
        >
          Read Books ({readBooks.length})
        </button>

        {/* Wishlist Books */}
        <button
          type="button"
          role="tab"
          onClick={() => setActiveTab("wishlist")}
          className={`tab ${
            activeTab === "wishlist"
              ? "tab-active font-bold text-[#23BE0A]"
              : ""
          }`}
        >
          Wishlist Books ({wishlist.length})
        </button>
      </div>

      {/* ================= Book List ================= */}
      <div className="flex flex-col gap-6">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book: IBooks) => (

            <ListedBookCard key={book.bookId} book={book} />

          ))
        ) : (
          /* ================= Empty State ================= */
          <div className="py-12 text-center text-gray-500">
            {activeTab === "read"
              ? "No read books found."
              : "No wishlist books found."}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedPage;