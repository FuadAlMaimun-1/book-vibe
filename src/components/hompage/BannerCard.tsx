import React from "react";
import Image from "next/image";
import logo from "@/assets/hero_img.jpg";

const BannerCard = () => {
  return (
    <section>
      <div className="rounded-2xl p-8 md:p-12 my-6">
        <div className="grid bg-base-200 p-15 rounded-2xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn btn-primary px-8">Start Reading</button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="Hero Banner Book"
              width={400}
              height={400}
              className="rounded-lg max-w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
