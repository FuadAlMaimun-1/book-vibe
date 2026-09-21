import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBooks } from "@/type/books.type";
import { ArrowLeft, Star} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IParams {
  params: {
    bookId: string;
  };
}

const getBooks = async () => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/books`);
    return res.json();
  } catch (error) {
    console.log("Error fetching books", error);
    return [];
  }
};

const BookDetailPage = async ({ params }: IParams) => {
  const { bookId } = await params;

  const books = await getBooks();

  const book = books.find((book: IBooks) => book.bookId === Number(bookId));
  console.log(book);

  return (
    <div className="min-h-screen bg-[#F3F3F3]/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/books"
          className="group mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-[#23BE0A] hover:text-white hover:shadow-md"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Books
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left: Image Container */}
            <div className="flex items-center justify-center rounded-2xl bg-[#F3F3F3] p-8 lg:col-span-5">
              <div className="relative flex h-[380px] w-full max-w-[280px] items-center justify-center sm:h-[450px]">
                <Image
                  src={book?.image || "/placeholder.jpg"}
                  alt={book?.bookName || "Book"}
                  fill
                  className="rounded-lg object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            </div>

            {/* Right: Information */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                {/* Book Title & Author */}
                <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  {book?.bookName}
                </h1>
                <p className="mt-3 text-base font-medium text-gray-600 sm:text-lg">
                  By :{" "}
                  <span className="text-gray-900 font-semibold">
                    {book?.author}
                  </span>
                </p>

                {/* Category Divider */}
                <div className="my-4 border-b border-gray-100" />

                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
                  <span>
                    Category:{" "}
                    <strong className="text-gray-800">{book?.category}</strong>
                  </span>
                </div>

                <div className="my-4 border-b border-gray-100" />

                {/* Tags Section */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-gray-800">Tag:</span>
                  {book?.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#23BE0A]/10 px-4 py-1 text-xs font-semibold text-[#23BE0A]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="my-4 border-b border-gray-100" />

                {/* Review / Description */}
                <div className="mt-4">
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    <strong className="text-gray-900">Review : </strong>
                    {book?.review}
                  </p>
                </div>

                {/* Quick Info Grid Table Style */}
                <div className="mt-6 grid grid-cols-2 gap-y-3 text-sm max-w-md">
                  <div className="text-gray-500">Number of Pages:</div>
                  <div className="font-bold text-gray-800">
                    {book?.totalPages}
                  </div>

                  <div className="text-gray-500">Publisher:</div>
                  <div className="font-bold text-gray-800">
                    {book?.publisher}
                  </div>

                  <div className="text-gray-500">Year of Publishing:</div>
                  <div className="font-bold text-gray-800">
                    {book?.yearOfPublishing}
                  </div>

                  <div className="text-gray-500">Rating:</div>
                  <div className="flex items-center gap-1 font-bold text-gray-800">
                    {book?.rating}
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400 transition-all duration-300 hover:text-yellow-500"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row ">
                <ReadButton book={book} />

                <WishlistButton  book={book} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
