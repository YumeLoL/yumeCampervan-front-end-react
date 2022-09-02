import React from "react";


import driveVan from "../../../assets/images/drive-all-van.svg";
import deliverBush from "../../../assets/images/deliver-caravan-bush.svg";
import MainLayout from "../../ui/organisms/MainLayout";
import HeroSession from "./HeroSession";
import ImageSeperator from "../../ui/atoms/ImageSeperator";
import { Marginer } from "../../ui/atoms/Marginer";
import BookCard from "../../ui/molecules/BookCard";
import BookingStep from "./BookingStep";
import AboutUs from "./AboutUs";
import CarsCarousel from "./CarsCarousel";




function HomePage() {
  return (
    <MainLayout>
      <HeroSession />
      <ImageSeperator src={driveVan} direction={"left"} />
      <Marginer direction="vertical" margin="8em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingStep />
      <Marginer direction="vertical" margin="8em" />
      <ImageSeperator src={deliverBush} direction={"right"} />
      <AboutUs />
      <Marginer direction="vertical" margin="10em" />
      <CarsCarousel />
      <Marginer direction="vertical" margin="10em" />
    </MainLayout>
  );
}

export default HomePage;
