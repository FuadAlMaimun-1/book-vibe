"use client";
import { IBooks } from "@/type/books.type";
import { createContext, ReactNode, useState } from "react";

type BooksContextType = {
  readBooks: IBooks[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBooks[]>>;
  wishlist: IBooks[];
  setWishlist: React.Dispatch<React.SetStateAction<IBooks[]>>;
};

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishlist: () => {},
});

interface BooksProviderProps {
  children: ReactNode;
}

const BooksProvider = ({ children }: BooksProviderProps) => {
  const [readBooks, setReadBooks] = useState<IBooks[]>([]);
  const [wishlist, setWishlist] = useState<IBooks[]>([]);

  const shareData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
