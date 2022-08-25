import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarCard from "../../ui/molecules/CarCard";

const TopCarsContainer = styled.div`
  ${tw`
    // set 1024px screen width and make it full width
    max-w-screen-lg
    w-full
    // 
    flex
    flex-col
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
      <CarCard />
      <CarCard />
      <CarCard />
    </TopCarsContainer>
  );
};

export default CarsCarousel;
