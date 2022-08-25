import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../ui/molecules/BookCard"
import Navbar from "../../ui/molecules/Navbar";
import HeroSession from "./HeroSession";
import BookingStep from "./BookingStep";
import { Marginer } from "../../ui/atoms/Marginer";
import ImageSeperator from "../../ui/atoms/ImageSeperator";
import driveVan from "../../../assets/images/drive-all-van.svg";
import deliverBush from "../../../assets/images/deliver-caravan-bush.svg";
import AboutUs from "./AboutUs";
import CarsCarousel from "./CarsCarousel";


// Use Twin’s tw import to create and style new components with Tailwind classes
const PageContainer = styled.div`
  ${tw` 
    flex
    flex-col
    w-full
    h-auto
    items-center
    `}
`;

function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSession />
      <ImageSeperator src={driveVan} direction={"left"} />
      <Marginer direction="vertical" margin="8em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingStep />
      <Marginer direction="vertical" margin="8em" />
      <ImageSeperator src={deliverBush} direction={"right"} />
      <AboutUs />
      <CarsCarousel />
    </PageContainer>
  );
}

export default HomePage;
