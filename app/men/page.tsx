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
      link: "/men/tops/tshirt"
    },
    {
      type: "CASUAL SHIRT",
      image: "/men/casual_shirt.jpeg",
      link: "/men/tops/casual-shirt"
    },
    {
      type: "SWEAT",
      image: "/men/sweat.jpeg",
      link: "/men/tops/sweat"
    },
    {
      type: "SPORT UTILITY WEAR",
      image: "/men/sport.jpeg",
      link: "/men/sport"
    },
    {
      type: "FLEECE",
      image: "/men/fleece.jpeg",
      link: "/men/tops/fleece"
    },
    {
      type: "OUTERWEAR",
      image: "/men/outerwear.jpeg",
      link: "/men/tops/outerwear"
    },
    {
      type: "CASUAL PANTS",
      image: "/men/casual_pants.jpeg",
      link: "/men/bottoms/casual-pants"
    },
    {
      type: "ALL PANTS",
      image: "/men/all_pants.jpeg",
      link: "/men/bottoms/all-pants"
    },
    {
      type: "SHORTS",
      image: "/men/shorts.jpeg",
      link: "/men/bottoms/shorts"
    },
    {
      type: "UT",
      image: "/men/ut.jpeg",
      link: "/men/tops/ut"
    },
    {
      type: "INNERWEAR & SOCKS",
      image: "/men/innerwear.jpeg",
      link: "/men/innerwear"
    },
    {
      type: "HEATTECH",
      image: "/men/heattech.jpeg",
      link: "/men/heattech"
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
