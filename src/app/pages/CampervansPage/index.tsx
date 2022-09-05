import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CarCard, { ICarType } from "../../ui/molecules/CarCard";
import MainLayout from "../../ui/organisms/MainLayout";
import LargeTitle from "../../ui/atoms/LargeTitle";
import Text from "../../ui/atoms/Text";
import img1 from "../../../assets/campervan/popTop/pop-top.jpg";
import img2 from "../../../assets/campervan/camper-trailer.jpg";
import img3 from "../../../assets/campervan/campervan-1.jpg";
import img4 from "../../../assets/campervan/motorhome.jpeg";
import { Marginer } from "../../ui/atoms/Marginer";
import Button from "../../ui/atoms/Button";
import Banner from "../../ui/molecules/Banner";
import { useNavigate } from "react-router-dom";


// fake data
const PromoteVans: ICarType[] = [
  {
    id: 1,
    thumbnailSrc: img1,
    name: "Pop Top Trailer",
    vanType: "Caravan",
    sleep: 4,
    originalPrice: 120,
    currentPrice: 100,
  },
  {
    id: 2,
    thumbnailSrc: img2,
    name: "Camper Trailer",
    vanType: "Caravan",
    sleep: 3,
    originalPrice: 150,
    currentPrice: 100,
  },
  {
    id: 3,
    thumbnailSrc: img3,
    name: "Campervan",
    vanType: "Campervan",
    sleep: 4,
    originalPrice: 123,
    currentPrice: 100,
  },
  {
    id: 4,
    thumbnailSrc: img4,
    name: "Motorhome",
    vanType: "Motorhome",
    sleep: 4,
    originalPrice: 109,
    currentPrice: 100,
  },
  {
    id: 1,
    thumbnailSrc: img1,
    name: "Pop Top Trailer",
    vanType: "Caravan",
    sleep: 4,
    originalPrice: 120,
    currentPrice: 100,
  },
  {
    id: 2,
    thumbnailSrc: img2,
    name: "Camper Trailer",
    vanType: "Caravan",
    sleep: 3,
    originalPrice: 150,
    currentPrice: 100,
  },
  {
    id: 3,
    thumbnailSrc: img3,
    name: "Campervan",
    vanType: "Campervan",
    sleep: 4,
    originalPrice: 123,
    currentPrice: 100,
  },
  {
    id: 4,
    thumbnailSrc: img4,
    name: "Motorhome",
    vanType: "Motorhome",
    sleep: 4,
    originalPrice: 109,
    currentPrice: 100,
  },
  {
    id: 1,
    thumbnailSrc: img1,
    name: "Pop Top Trailer",
    vanType: "Caravan",
    sleep: 4,
    originalPrice: 120,
    currentPrice: 100,
  },
  {
    id: 2,
    thumbnailSrc: img2,
    name: "Camper Trailer",
    vanType: "Caravan",
    sleep: 3,
    originalPrice: 150,
    currentPrice: 100,
  },
];

const VansContainer = styled.div`
  ${tw` 
  max-w-screen-2xl
  flex 
  flex-wrap 
  align-middle 
  justify-center
  my-8
  `}
`;
const StyledBanner = styled(Banner)`
    ${tw` 
    bg-transparent 
    `}
`
const CampervansPage = () => {
    const navigate = useNavigate()
  return (
    <MainLayout>
      <Marginer direction="vertical" margin="10em" />
      <LargeTitle title={"Looking for a van ?"} />
      <Text
        text={
          "Here's some of our favourites for Melbourne, Tasmania, and Sydney. If you can’t find something below go to view all vans and find the perfect caravan or motorhome for your holiday."
        }
      />
      <VansContainer>
        {PromoteVans.map((van: ICarType) => {
          return (
            <CarCard
                  key={van.id}
                  thumbnailSrc={van.thumbnailSrc}
                  name={van.name}
                  vanType={van.vanType}
                  sleep={van.sleep}
                  originalPrice={van.originalPrice}
                  currentPrice={van.currentPrice}           
                  onClick={() => navigate(`/campervans/${van.id}`) }
                  />
          );
        })}
      </VansContainer>
      <Button text={"Show more"} theme={"filled"} />
      <StyledBanner text={"View all vans"} theme={"outlined"} title={"Can't find what you're looking for?"} />
    </MainLayout>
  );
};

export default CampervansPage;
