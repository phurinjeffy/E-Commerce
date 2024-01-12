import { GenderLayout } from "@/components";
import React from "react";

const Women = () => {
  const posters = [
    {
      image: "/women/poster1.png"
    },
  ];

  const categories = [
    {
      type: "T-SHIRT",
      image: "/women/tshirt.jpeg",
    },
    {
      type: "SHIRT",
      image: "/women/shirt.jpeg",
    },
    {
      type: "SWEAT",
      image: "/women/sweat.jpeg",
    },
    {
      type: "KNITWEAR",
      image: "/women/knitwear.jpeg",
    },
    {
      type: "FLEECE",
      image: "/women/fleece.jpeg",
    },
    {
      type: "OUTERWEAR",
      image: "/women/outerwear.jpeg",
    },
    {
      type: "PANTS",
      image: "/women/pants.jpeg",
    },
    {
      type: "SHORTS",
      image: "/women/shorts.jpeg",
    },
    {
      type: "DRESS",
      image: "/women/dress.jpeg",
    },
    {
      type: "LOUNGEWEAR",
      image: "/women/lounge.jpeg",
    },
    {
      type: "INNERWEAR",
      image: "/women/innerwear.jpeg",
    },
    {
      type: "HEATTECH",
      image: "/women/heattech.jpeg",
    },
  ];

  return (
    <GenderLayout 
      categories={categories} 
      gender="women" 
      posters={posters} 
    />
  );
};

export default Women;
