"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBooks } from "@/type/books.type";
import { BookOpen } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBooks }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlistBook = () => {
    console.log("Wishlist Button Clicked");

    setWishlist([...wishlist, book]);
    toast.success(`Your have added "${book.bookName} to your wishlist"`);
  };
  return (
    <button
      onClick={handleWishlistBook}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0aa3be] px-6 py-3.5 font-bold text-white transition-all hover:bg-[#173f42] hover:shadow-lg active:scale-95"
    >
      <BookOpen size={18} />
      Wishlist
    </button>
  );
};

export default WishlistButton;
