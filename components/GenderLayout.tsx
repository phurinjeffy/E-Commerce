"use client";
import React, { useState, useEffect } from "react";
import { Path } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface Category {
  type: string;
  image: string;
  link: string;
}

interface Poster {
  image: string;
}

interface GenderLayoutProps {
  categories: Category[];
  posters: Poster[];
  gender: string;
}

const GenderLayout = ({ categories, posters, gender }: GenderLayoutProps) => {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const currentPoster = posters[currentPosterIndex];

  if (posters.length > 1) {
    useEffect(() => {
      const posterInterval = setInterval(() => {
        setCurrentPosterIndex((prevIndex) =>
          prevIndex === posters.length - 1 ? 0 : prevIndex + 1
        );
        setIsReady(false);
      }, 10000);

      return () => clearInterval(posterInterval);
    }, [posters]);
  }

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <div className="w-screen h-full pt-20 flex flex-col px-28">
      <Path />

      <h1 className="text-black font-black text-4xl my-4 mx-auto uppercase">
        {gender}
      </h1>

      <div className="my-8 mx-auto">
        <Image
          key={currentPoster.image}
          src={currentPoster.image}
          width={1200}
          height={700}
          className={`w-screen transition duration-700 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          onLoad={onLoadCallback}
          alt={currentPoster.image}
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-black font-black text-4xl my-8">
          SEARCH BY CATEGORY
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} className="flex flex-col items-center" href={category.link}>
              <Image
                src={category.image}
                width={300}
                height={300}
                alt={category.type}
              />
              <p className="my-3 text-xl font-light uppercase">
                {category.type}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="my-20 mx-auto">
        <Image
          src="/limited_stock.jpeg"
          width={1200}
          height={700}
          className="w-screen"
          alt="Limited Stock"
        />
      </div>
    </div>
  );
};

export default GenderLayout;
