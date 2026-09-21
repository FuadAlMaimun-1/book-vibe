"use client";
import { createContext, ReactNode, useState } from "react";

export const BooksContext = createContext({});

interface IBooksContext {
  children: ReactNode;
}

const BooksProvider = ({ children }: IBooksContext) => {
  
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider 
     value={shareData} >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
