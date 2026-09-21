"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBooks } from "@/type/books.type";
import { BookOpen } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBooks }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);
   

  const handleReadBook = () => {
    console.log("Read Button Clicked");

    setReadBooks([...readBooks, book]);
    toast.success(`Your have read "${book.bookName}"`);
  };
  return (
    <button
      onClick={handleReadBook}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#23BE0A] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#1fa308] hover:shadow-lg active:scale-95"
    >
      <BookOpen size={18} />
      Read Book
    </button>
  );
};

export default ReadButton;
