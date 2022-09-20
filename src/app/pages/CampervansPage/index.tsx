import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import useFetch from "../../hooks/useFetch";
import { IVan } from "../../libs/interface";
import Button from "../../ui/atoms/Button";
import { Marginer } from "../../ui/atoms/Marginer";
import Text from "../../ui/atoms/Text";
import Title from "../../ui/atoms/Title";
import Banner from "../../ui/molecules/Banner";
import Calendar from "../../ui/molecules/Calendar";
import CarCard from "../../ui/molecules/Card/CarCard";
import FilterBox from "../../ui/molecules/FilterBox";
import MainLayout from "../../ui/organisms/MainLayout";

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
    z-40
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
  const [url, setUrl] = useState(`http://localhost:4000/vanProfile`);
  const { data, loading, reFetch } = useFetch(url);

  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [sleep, setSleep] = useState("");
  const [vanType, setVanType] = useState("");
  const [price, setPrice] = useState({
    min: 0, 
    max: 500
  })

  const [params, setParams] = useState("");

  const onClick = () => {
    console.log(
      "location: " + location.toLowerCase(),
      "sleep: " + sleep.slice(7, 8),
      "vanType: " + vanType,
      "date:" + date
    );
    switch (params) {
      case "location":
        return setUrl(
          `http://localhost:4000/vanProfile?location=${location}&sleep_lte=${
            sleep || 6
          }`
        );
      case "sleep":
        return setUrl(
          `http://localhost:4000/vanProfile?sleep_lte=${sleep || 6}`
        );
    }

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
            text={"Location"}
            optionCollection={["All", "Melbourne", "Adelaide", "Sydney"]}
            selectedValue={location}
            setSelectedValue={setLocation}
          />

          <Calendar date={date} setDate={setDate} />

          <FilterBox
            className="sleep"
            text={sleep ? `${sleep}` : `Guests`}
            optionCollection={[
              `Guest 1`,
              "Guests 2",
              "Guests 3",
              "Guests 4",
              "Guests 5",
              "Guests 6",
            ]}
            selectedValue={sleep}
            setSelectedValue={setSleep}
          />

          


          {/* <FilterBox
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
          /> */}

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

      <div className="max-w-screen-2xl px-10 text-center">
        <Title title={"Looking for a van ?"} size={"large"} />
        <Text
          text={
            "Here's some of our favourites for Melbourne, Tasmania, and Sydney. If you can’t find something below go to view all vans and find the perfect caravan or motorhome for your holiday."
          }
        />
      </div>

      <VansContainer>
        {loading
          ? "Loading please wait"
          : data?.map((van: IVan) => {
              return (
                <CarCard
                  key={van.id}
                  name={van.name}
                  vanType={van.vanType}
                  sleep={van.sleep}
                  location={van.location}
                  originalPrice={van.originalPrice}
                  currentPrice={van.currentPrice}
                  onClick={() => navigate(`/campervans/${van.id}`)}
                  thumbnailSrc={van.thumbnailSrc?.map((imgUrl, i) => (
                    <img
                      key={i}
                      className="w-full h-[246px] object-cover"
                      src={imgUrl}
                      alt=""
                    />
                  ))}
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
