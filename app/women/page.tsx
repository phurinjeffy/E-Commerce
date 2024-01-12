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
      link: "/women/tops/tshirt"
    },
    {
      type: "SHIRT",
      image: "/women/shirt.jpeg",
      link: "/women/tops/shirt"
    },
    {
      type: "SWEAT",
      image: "/women/sweat.jpeg",
      link: "/women/tops/sweat"
    },
    {
      type: "KNITWEAR",
      image: "/women/knitwear.jpeg",
      link: "/women/tops/knitwear"
    },
    {
      type: "FLEECE",
      image: "/women/fleece.jpeg",
      link: "/women/tops/fleece"
    },
    {
      type: "OUTERWEAR",
      image: "/women/outerwear.jpeg",
      link: "/women/tops/outerwear"
    },
    {
      type: "PANTS",
      image: "/women/pants.jpeg",
      link: "/women/bottoms/pants"
    },
    {
      type: "SHORTS",
      image: "/women/shorts.jpeg",
      link: "/women/bottoms/shorts"
    },
    {
      type: "DRESS",
      image: "/women/dress.jpeg",
      link: "/women/dress"
    },
    {
      type: "LOUNGEWEAR",
      image: "/women/lounge.jpeg",
      link: "/women/loungewear"
    },
    {
      type: "INNERWEAR",
      image: "/women/innerwear.jpeg",
      link: "/women/innerwear"
    },
    {
      type: "HEATTECH",
      image: "/women/heattech.jpeg",
      link: "/women/heattech"
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
