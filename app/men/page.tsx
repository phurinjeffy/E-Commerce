"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Men = () => {
  const pathname = usePathname();

  const formatPath = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    return segments.map((segment, index) => (
      <React.Fragment key={index}>
        <div className="text-gray-500 uppercase text-sm font-normal inline">
          {' / '} 
        </div>
        <Link className="text-gray-500 uppercase text-sm font-normal hover:underline" href={`/${segments.slice(0, index + 1).join('/')}`}>
          {segment}
        </Link>
      </React.Fragment>
    ));
  };

  const categories = [
    {
      type: "T-SHIRT",
      image: "/men/tshirt.jpeg",
    },
    {
      type: "CASUAL SHIRT",
      image: "/men/casual_shirt.jpeg",
    },
    {
      type: "SWEAT",
      image: "/men/sweat.jpeg",
    },
    {
      type: "SPORT UTILITY WEAR",
      image: "/men/sport.jpeg",
    },
    {
      type: "FLEECE",
      image: "/men/fleece.jpeg",
    },
    {
      type: "OUTERWEAR",
      image: "/men/outerwear.jpeg",
    },
    {
      type: "CASUAL PANTS",
      image: "/men/casual_pants.jpeg",
    },
    {
      type: "ALL PANTS",
      image: "/men/all_pants.jpeg",
    },
    {
      type: "SHORTS",
      image: "/men/shorts.jpeg",
    },
    {
      type: "UT",
      image: "/men/ut.jpeg",
    },
    {
      type: "INNERWEAR & SOCKS",
      image: "/men/innerwear.jpeg",
    },
    {
      type: "HEATTECH",
      image: "/men/heattech.jpeg",
    },
  ];

  return (
    <div className="w-screen h-full pt-20 flex flex-col px-28">
      <div className="mb-2 my-8">
        <Link className="text-gray-500 uppercase text-sm font-normal hover:underline" href="/">
          HOME PAGE
        </Link>
        {formatPath(pathname)}
      </div>

      <h1 className="text-black font-black text-4xl my-4 mx-auto">MEN</h1>

      <div className="my-8 mx-auto">
        <Image
          src="/men_poster.png"
          width={1200}
          height={700}
          className="w-screen"
          alt="Men Poster"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-black font-black text-4xl my-8">SEARCH BY CATEGORY</h2>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={category.image}
                width={300}
                height={300}
                alt={category.type}
              />
              <p className="my-3 text-xl font-light">{category.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20 mx-auto">
        <Image
          src="/limited_stock.jpeg"
          width={1200}
          height={700}
          className="w-screen"
          alt="Men Poster"
        />
      </div>
    </div>
  );
};

export default Men;
