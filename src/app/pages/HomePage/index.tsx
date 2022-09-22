import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../ui/organisms/MainLayout";
import HeroSession from "./HeroSession";
import BookingStep from "./BookingStep";
import AboutUs from "./AboutUs";
import CarsCarousel from "./CarsCarousel";
import Banner from "../../ui/molecules/Banner";
import ImageSeperator from "../../ui/atoms/ImageSeperator";
import { Marginer } from "../../ui/atoms/Marginer";
import driveVan from "../../../images/drive-all-van.svg";
import deliverBush from "../../../images/deliver-caravan-bush.svg";

function HomePage() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <HeroSession />
      <ImageSeperator src={driveVan} direction={"left"} />
      <Marginer direction="vertical" margin="8em" />
      <Marginer direction="vertical" margin="8em" />
      <BookingStep />
      <Marginer direction="vertical" margin="8em" />
      <ImageSeperator src={deliverBush} direction={"right"} />
      <AboutUs />
      <Marginer direction="vertical" margin="10em" />
      <CarsCarousel />
      <Marginer direction="vertical" margin="10em" />
      <Banner
        title={"Can't find what you're looking for?"}
        text={"View all vans"}
        theme={"outlined"}
        size="large"
        onClick={() => navigate("/campervans")}
      />
      <Marginer direction="vertical" margin="10em" />
    </MainLayout>
  );
}

export default HomePage;
