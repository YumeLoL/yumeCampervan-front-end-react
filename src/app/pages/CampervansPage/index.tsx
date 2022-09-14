import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import tw from "twin.macro";
import styled from "styled-components";
import CarCard from "../../ui/molecules/CarCard";
import MainLayout from "../../ui/organisms/MainLayout";
import Title from "../../ui/atoms/Title";
import Text from "../../ui/atoms/Text";
import { Marginer } from "../../ui/atoms/Marginer";
import Button from "../../ui/atoms/Button";
import Banner from "../../ui/molecules/Banner";
import { ICarType } from "../../libs/interface";
import FilterBox from "../../ui/molecules/FilterBox";
import Calendar from "../../ui/molecules/Calendar";

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

const FilterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    flex
    justify-start
    px-2 py-2
    border-t-[1px]
    border-b-[1px]
    border-gray-300
  `}
`;
const FilterItems = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    h-auto
    m-auto
    flex
    items-center
  `}
`;
const StyledButton = styled(Button)`
  ${tw`mb-0`}
`;

const CampervansPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [sleep, setSleep] = useState();
  const [vanType, setVanType] = useState("");
  const [url, setUrl] = useState(`http://localhost:3000/vanProfile?`);

  const { data, loading, reFetch } = useFetch(url);

  const onClick = () => {
    console.log(
      "location: " + location,
      "sleep: " + sleep,
      "vanType: " + vanType,
      "date:" + date
    );

    if (location)
      setUrl(
        `http://localhost:3000/vanProfile?location=${location}&sleep_lte=${
          sleep || 6
        }`
      );
    else if (sleep)
      setUrl(`http://localhost:3000/vanProfile?sleep_lte=${sleep || 6}`);

    console.log("url:", url);

    reFetch();
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <MainLayout>
      <FilterContainer>
        <FilterItems>
          <FilterBox
            className="location"
            text={"location"}
            optionCollection={["melbourne", "adelaide", "sydney"]}
            selectedValue={location}
            setSelectedValue={setLocation}
          />

          <Calendar date={date} setDate={setDate} />

          <FilterBox
            className="sleep"
            text={sleep ? `${sleep}` : `Guests`}
            optionCollection={[`1`, "2", "3", "4", "5", "6"]}
            selectedValue={sleep}
            setSelectedValue={setSleep}
          />

          <FilterBox
            className="type"
            text={"Van Type"}
            optionCollection={[
              "Pop top",
              "Trailer",
              "Campervan",
              "Motorhome",
              "Caravan",
            ]}
            selectedValue={vanType}
            setSelectedValue={setVanType}
          />

          <StyledButton
            className=""
            text={"Search vans"}
            theme={"outlined"}
            onClick={onClick}
          />
        </FilterItems>
      </FilterContainer>

      {/* <FilterCard /> */}

      <Marginer direction="vertical" margin="5em" />
      <Title title={"Looking for a van ?"} size={"large"} />
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
        size={"large"}
      />
    </MainLayout>
  );
};

export default CampervansPage;
