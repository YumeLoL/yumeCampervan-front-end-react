import React from "react";
import useFetch from "../../hooks/useFetch";
import tw from "twin.macro";
import styled from "styled-components";
import CarCard from "../../ui/molecules/CarCard";
import MainLayout from "../../ui/organisms/MainLayout";
import LargeTitle from "../../ui/atoms/LargeTitle";
import Text from "../../ui/atoms/Text";
import { Marginer } from "../../ui/atoms/Marginer";
import Button from "../../ui/atoms/Button";
import Banner from "../../ui/molecules/Banner";
import { useNavigate } from "react-router-dom";
import FilterCard from "./FilterCard";
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
  const { data, loading } = useFetch("http://localhost:3000/vanProfile");

  return (
    <MainLayout>
      <FilterCard />
      <Marginer direction="vertical" margin="5em" />
      <LargeTitle title={"Looking for a van ?"} />
      <Text
        text={
          "Here's some of our favourites for Melbourne, Tasmania, and Sydney. If you can’t find something below go to view all vans and find the perfect caravan or motorhome for your holiday."
        }
      />
      <VansContainer>
        {loading
          ? "Loading please wait"
          : data.map((van: ICarType) => {
              return (
                <CarCard
                  key={van.id}
                  thumbnailSrc={van.thumbnailSrc?.map((imgUrl) => (
                    <img
                      className="w-full h-[246px] object-cover"
                      src={imgUrl}
                      alt=""
                    />
                  ))}
                  name={van.name}
                  vanType={van.vanType}
                  sleep={van.sleep}
                  location={van.location}
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
