import styled from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchCard from "../components/SearchBar";
import Text from "../ui/atoms/Text";
import Title from "../ui/atoms/Title";
import ImageSeparator from "../ui/atoms/ImageSeparator";
import { Marginer } from "../ui/atoms/Margin";
import { SCREENS } from "../libs/responsive";
import orangeVan from "../libs/img/orange-camper-van.png";
import blueVan from "../libs/img/blue-camper-van.png";
import blob from "../libs/img/blob.svg";
import driveVan from "../libs/img/drive-all-van.svg";
import deliverBush from "../libs/img/deliver-caravan-bush.svg";
import Layout from "../ui/organisms/Layout";

const HomePage = () => {
  return (
    <Layout>
      {/* hero session */}
      <HeroContainer>
        <TopMain>
          <LeftContainer>
            <Title
              title={"Rent The Best Car Lorem ipsum dolor sit amet."}
              size={"large"}
            />
            <Text
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem, sint dicta sequi ratione facere ipsum fugiat qui, impedit molestias, doloremque soluta at. Minus labore a aut hic nisi, autem laudantium voluptas ratione corporis ipsam."
              }
            />
          </LeftContainer>

          <RightContainer>
            <BlobContainer>
              <img src={blob} alt="blobImg" />
            </BlobContainer>
            <StandaloneCar>
              <img src={blueVan} alt="blueCampervan" />
            </StandaloneCar>
          </RightContainer>
        </TopMain>

        {/* search by location */}
        <SearchContainer>
          <SearchCard />
        </SearchContainer>
      </HeroContainer>

      <Marginer direction="vertical" margin="10em" />
      {/* <CarsCarousel /> */}

      {/* separator */}
      <ImageSeparator src={driveVan} direction={"left"} />
      <Marginer direction="vertical" margin="8em" />

      {/* aboutUs session */}
      <AboutUsContainer>
        <CarContainer>
          <img src={orangeVan} alt="" />
        </CarContainer>
        <InfoContainer>
          <Title
            title="Feel The Best Experience With Our Rental Deals"
            size={"large"}
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
        </InfoContainer>
      </AboutUsContainer>

      {/* separator */}
      <Marginer direction="vertical" margin="8em" />
      <ImageSeparator src={deliverBush} direction={"right"} />

      {/* booking step session */}
      <BookStepContainer>
        <Title title="Our Booking Steps" size={"large"} />
        <StepsContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </StepIcon>
            </Step>
            <StepTitle>Choose Location</StepTitle>
            <Text text=" Find the nearest Yourcar point and book your car. Lorem ipsum dolor sit amet." />
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </StepIcon>
            </Step>
            <StepTitle>Pick-Up Date</StepTitle>
            <Text text="Pickup the Best Date to rent a car for you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid." />
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faCarSide} />
              </StepIcon>
            </Step>
            <StepTitle>Book Your Car</StepTitle>
            <Text text=" Book your nice car with ease in one single click. Lorem ipsum dolor sit amet." />
          </StepContainer>
        </StepsContainer>
      </BookStepContainer>
    </Layout>
  );
};

export default HomePage;

// aboutUs session
const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-evenly
        px-4
        py-7
    `}
`;
const CarContainer = styled.div`
  height: 15em;
  width: auto;

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 33em;
    margin-left: 0;
  }

  img {
    width: auto;
    height: 100%;
  }
`;
const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
    `}
`;

// hero session
const HeroContainer = styled.div`
  min-height: 400px;
  @media (min-width: ${SCREENS.md}) {
    height: 600px;
  }
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    justify-center
    items-center
    `}
`;
const TopMain = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
  `}
`;
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    h-auto
    flex
    flex-col
    justify-end
    items-start
    m-4
    relative
    `}
`;
const RightContainer = styled.div`
  ${tw`
    w-1/2
    mt-36
    flex
    flex-col
    relative
    `}
`;
const SearchContainer = styled.div`
  ${tw`
  w-full
  flex
  sm:flex-row
  md:flex-row
  lg:flex-row
  xl:flex-row
  `}
`;
const BlobContainer = styled.div`
  width: 25em;
  height: 10em;
  position: absolute;
  right: -7em;
  top: -10em;
  z-index: 2;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 45em;
    max-height: 10em;
    right: -7em;
    top: -14em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 65em;
    max-height: 30em;
    right: 2em;
    top: -17em;
    transform: rotate(-60deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 90em;
    max-height: 40em;
    right: 0em;
    top: -20em;
    transform: rotate(-65deg);
  }
`;
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -2em;
  position: absolute;
  z-index: 5;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -3em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -7em;
  }
`;

//booking steps session
const BookStepContainer = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;

const StepsContainer = styled.div`
  ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-16
      lg:mt-24
    `};
`;

const StepContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-gray-500
      m-3
      px-8
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    w-28
    h-28
    md:w-40
    md:h-40
    flex
    rounded-lg
    items-center
    justify-center
    p-2
    `};
`;

const StepTitle = styled.h4`
  ${tw`
      text-black
      text-lg
      md:text-2xl
      font-semibold
      my-4
    `};
`;

const StepIcon = styled.span`
  ${tw`
      text-secondary
      text-6xl
    `};
`;
