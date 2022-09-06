import React from "react";
import { ICarType } from "../interface";

// fake data
const popTopImages = [
    <img
      className="w-full h-full"
      src={require("../../../assets/campervan/popTop/pop-top.jpg")}
      alt=""
    />,
    <img
      className="w-full h-full"
      src={require("../../../assets/campervan/popTop/1.jpeg")}
      alt=""
    />,
    <img
      className="w-full h-full"
      src={require("../../../assets/campervan/popTop/2.jpeg")}
      alt=""
    />,
    <img
      className="w-full h-full"
      src={require("../../../assets/campervan/popTop/3.jpeg")}
      alt=""
    />,
  ];

  const camperTrailerImages = [
    <img
        className="w-full h-full"
        src={require("../../../assets/campervan/camper-trailer.jpg")}
        alt=""
      />,
  ]
  const camperVanImages = [
    <img
        className="w-full h-full"
        src={require("../../../assets/campervan/campervan-1.jpg")}
        alt=""
      />,
  ]
  const motorhomeImages = [
    <img
        className="w-full h-full"
        src={require("../../../assets/campervan/motorhome.jpeg")}
        alt=""
      />,
  ]
  
  // fake data
  const PromoteVans: ICarType[] = [
    {
      id: 1,
      thumbnailSrc: popTopImages,
      name: "Pop Top Trailer",
      vanType: "Caravan",
      sleep: 4,
      originalPrice: 120,
      currentPrice: 100,
    },
    {
      id: 2,
      thumbnailSrc: camperTrailerImages,
      name: "Camper Trailer",
      vanType: "Caravan",
      sleep: 3,
      originalPrice: 150,
      currentPrice: 100,
    },
    {
      id: 3,
      thumbnailSrc: camperVanImages,
      name: "Campervan",
      vanType: "Campervan",
      sleep: 4,
      originalPrice: 123,
      currentPrice: 100,
    },
    {
      id: 4,
      thumbnailSrc: motorhomeImages,
      name: "Motorhome",
      vanType: "Motorhome",
      sleep: 4,
      originalPrice: 109,
      currentPrice: 100,
    },
    {
      id: 1,
      thumbnailSrc: popTopImages,
      name: "Pop Top Trailer",
      vanType: "Caravan",
      sleep: 4,
      originalPrice: 120,
      currentPrice: 100,
    },
    {
      id: 2,
      thumbnailSrc: camperTrailerImages,
      name: "Camper Trailer",
      vanType: "Caravan",
      sleep: 3,
      originalPrice: 150,
      currentPrice: 100,
    },
    {
      id: 3,
      thumbnailSrc: camperVanImages,
      name: "Campervan",
      vanType: "Campervan",
      sleep: 4,
      originalPrice: 123,
      currentPrice: 100,
    },
    {
      id: 4,
      thumbnailSrc: motorhomeImages,
      name: "Motorhome",
      vanType: "Motorhome",
      sleep: 4,
      originalPrice: 109,
      currentPrice: 100,
    },
    {
      id: 1,
      thumbnailSrc: popTopImages,
      name: "Pop Top Trailer",
      vanType: "Caravan",
      sleep: 4,
      originalPrice: 120,
      currentPrice: 100,
    },
    {
      id: 2,
      thumbnailSrc: camperTrailerImages,
      name: "Camper Trailer",
      vanType: "Caravan",
      sleep: 3,
      originalPrice: 150,
      currentPrice: 100,
    },
    {
      id: 3,
      thumbnailSrc: camperVanImages,
      name: "Campervan",
      vanType: "Campervan",
      sleep: 4,
      originalPrice: 123,
      currentPrice: 100,
    },
    {
      id: 4,
      thumbnailSrc: motorhomeImages,
      name: "Motorhome",
      vanType: "Motorhome",
      sleep: 4,
      originalPrice: 109,
      currentPrice: 100,
    },
  ];
  
  export default PromoteVans