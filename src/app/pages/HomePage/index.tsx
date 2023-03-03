import { useNavigate } from "react-router-dom";
import deliverBush from "../../../images/deliver-caravan-bush.svg";
import driveVan from "../../../images/drive-all-van.svg";
import ImageSeparator from "../../ui/atoms/ImageSeparator";
import { Marginer } from "../../ui/atoms/Marginer";
import Banner from "../../ui/molecules/Banner";
import MainLayout from "../../ui/organisms/MainLayout";
import AboutUs from "./AboutUs";
import BookingStep from "./BookingStep";
import HeroSession from "./HeroSession";

function HomePage() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <HeroSession />
      <ImageSeparator src={driveVan} direction={"left"} />
      <Marginer direction="vertical" margin="8em" />
      <BookingStep />
      <Marginer direction="vertical" margin="8em" />
      <ImageSeparator src={deliverBush} direction={"right"} />
      <AboutUs />
      <Marginer direction="vertical" margin="10em" />
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
