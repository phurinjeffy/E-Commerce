import { GenderLayout } from "@/components";
import React from "react";

const Men = () => {
  const posters = [
    {
      image: "/men/poster1.png"
    },
    {
      image: "/men/poster2.png"
    }
  ];

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
    <GenderLayout 
      categories={categories} 
      gender="men" 
      posters={posters} 
    />
  );
};

export default Men;
