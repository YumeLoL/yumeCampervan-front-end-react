import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CarCard from "../../ui/molecules/CarCard";
import MainLayout from "../../ui/organisms/MainLayout";
import LargeTitle from "../../ui/atoms/LargeTitle";
import Text from "../../ui/atoms/Text";
import { Marginer } from "../../ui/atoms/Marginer";
import Button from "../../ui/atoms/Button";
import Banner from "../../ui/molecules/Banner";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCard from "../../ui/molecules/SearchCard/FilterCard";
import PromoteVans from "../../libs/fakeData";
import { ICarType } from "../../libs/interface";


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
`;
const CampervansPage = () => {
  const navigate = useNavigate();
  const locationData = useLocation();
  const searchedData = locationData.state
  console.log(searchedData)

  return (
    <MainLayout>
      <Marginer direction="vertical" margin="10em" />
      <FilterCard />
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
              onClick={() => navigate(`/campervans/${van.id}`)}
            />
          );
        })}
      </VansContainer>
      <Button text={"Show more"} theme={"filled"} />
      <StyledBanner
        text={"View all vans"}
        theme={"outlined"}
        title={"Can't find what you're looking for?"}
      />
    </MainLayout>
  );
};

export default CampervansPage;
