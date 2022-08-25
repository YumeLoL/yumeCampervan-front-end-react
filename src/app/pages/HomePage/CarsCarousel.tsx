import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots } from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import CarCard, { ICarType } from "../../ui/molecules/CarCard";
import img1 from "../../../assets/campervan/pop-top.jpg"
import img2 from "../../../assets/campervan/camper-trailer.jpg"
import img3 from "../../../assets/campervan/campervan-1.jpg"
import img4 from "../../../assets/campervan/motorhome.jpeg"

const testCampervan1:ICarType = {
  thumbnailSrc: img1,
  name: "Pop Top Trailer",
  mileage:"10k",
  gearType:"Auto",
  dailyPrice:100,
  monthlyPrice:1700,
  gas:"Petrol",
}
const testCampervan2:ICarType  = {
  thumbnailSrc: img2,
  name: "Camper Trailer",
  mileage:"10k",
  gearType:"Auto",
  dailyPrice:100,
  monthlyPrice:1700,
  gas:"Petrol",
}
const testCampervan3:ICarType  = {
  thumbnailSrc: img3,
  name: "Campervan",
  mileage:"10k",
  gearType:"Auto",
  dailyPrice:100,
  monthlyPrice:1700,
  gas:"Petrol",
}
const testCampervan4:ICarType  = {
  thumbnailSrc: img4,
  name: "Motorhome",
  mileage:"10k",
  gearType:"Auto",
  dailyPrice:100,
  monthlyPrice:1700,
  gas:"Petrol",
}

const TopCarsContainer = styled.div`
  ${tw`
    // set 1024px screen width and make it full width
    max-w-screen-lg
    w-full
    // 
    flex
    flex-row
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const CarsCarousel = () => {
  return (
    <TopCarsContainer>
      <CarCard {...testCampervan1} />
      <CarCard {...testCampervan2} />
      <CarCard {...testCampervan3} />
      <CarCard {...testCampervan4} />
     
    </TopCarsContainer>
  );
};

export default CarsCarousel;
