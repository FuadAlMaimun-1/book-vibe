import { IBooks } from "@/type/books.type";
import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book }: { book: IBooks }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row">
        {/* ================= Book Image ================= */}
        <div className="flex h-56 w-full flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 p-4 md:w-48">
          <Image
            src={book.image}
            width={400}
            height={400}
            alt={book.bookName}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* ================= Book Details ================= */}
        <div className="w-full flex-1">
          {/* Book Name */}
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            {book.bookName || "The Catcher in the Rye"}
          </h2>

          {/* Author */}
          <p className="mb-4 font-medium text-gray-600">
            By : {book.author || "Awlad Hossain"}
          </p>

          {/* ================= Tags + Year ================= */}
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="font-bold text-gray-800">Tag</span>

            {/* Tags */}
            {book.tags && book.tags.length > 0 ? (
              book.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={`${tag}-${tagIndex}`}
                  className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))
            ) : (
              <>
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#23BE0A]">
                  #Young Adult
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#23BE0A]">
                  #Identity
                </span>
              </>
            )}

            {/* Publishing Year */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Year of Publishing: {book.yearOfPublishing || 1924}</span>
            </div>
          </div>

          {/* ================= Publisher + Pages ================= */}
          <div className="mb-4 flex flex-wrap items-center gap-6 border-b border-gray-100 pb-4 text-sm text-gray-500">
            <div>Publisher: {book.publisher || "Scriber"}</div>

            <div>Page: {book.totalPages || 192}</div>
          </div>

          {/* ================= Badges + Details ================= */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category */}
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#328EFF]">
              Category: {book.category || "Classic"}
            </span>

            {/* Rating */}
            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[#FFAC33]">
              Rating: {book.rating || "4.5"}
            </span>

            {/* View Details */}
            <Link href={`/books/${book.bookId}`}>
              <button
                type="button"
                className="rounded-full bg-[#23BE0A] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-green-600"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListedBookCard;
