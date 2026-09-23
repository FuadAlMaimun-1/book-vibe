import { IBooks } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ books }: { books: IBooks }) => {

  const {bookId, image, bookName, author, tags, category, rating, } = books;
  

  return (
    <Link
      href={`/books/${bookId}`}
      className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-base-100 p-6 transition-all duration-300 hover:shadow-xl"
    >
      <div>
        {/* Book Image Container */}
        <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-[#F3F3F3] p-6">
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={bookName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-[#23BE0A]/10 px-4 py-1 text-sm font-semibold text-[#23BE0A]"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-[#23BE0A]/10 px-4 py-1 text-sm font-semibold text-[#23BE0A]">
              {category || "Young Adult"}
            </span>
          )}
        </div>

        {/* Title & Author */}
        <div className="mt-4">
          <h2 className="font-serif text-2xl font-bold text-gray-800 line-clamp-1">
            {bookName}
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-600">
            By : {author}
          </p>
        </div>
      </div>

      {/* Bottom Section with Dashed Divider */}
      <div className="mt-4">
        {/* Dashed Border Line */}
        <div className="my-4 border-b-2 border-dashed border-gray-200" />

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-600">
          <span>{category}</span>
          <div className="flex items-center gap-2">
            <span>{rating ? Number(rating).toFixed(2) : "5.00"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
