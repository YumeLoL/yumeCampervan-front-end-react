import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Title from "../../../ui/atoms/Title";
import Text from "../../../ui/atoms/Text";
import { ICarType } from "../../../libs/interface";
import CarCard from "../../../ui/molecules/Card/CarCard";

const CarouselContainer = styled.div`
  ${tw`
  // set 1024px screen width and make it full width
  max-w-screen-2xl
  w-full
  // 
  flex
  flex-wrap
  items-center
  justify-evenly
  pr-4
  pl-4
  md:pl-0
  md:pr-0
  my-10
  `};
`;

const CarouselDescription = styled.div`
  ${tw`
  w-full
  flex
  flex-col
  text-center
  `}
`;

const ShortText = styled(Text)`
  ${tw`w-full m-auto px-10`}
`;

const CarsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (curent: number) => setCurrent(curent);
  const [promoteVans, setPromoteVans] = useState([]);

  useEffect(() => {
    const filterPromotionVans = async () => {
      await axios
        .get("http://localhost:3000/vanProfile")
        .then((res) => {
          const promoteVans = res.data.filter(
            (vanObj: ICarType) => vanObj.discount
          );
          setPromoteVans(promoteVans);
        })
        .catch((err) => console.log(err));
    };

    filterPromotionVans();
  }, []);

  const vans = promoteVans.map((van: ICarType) => (
    <CarCard
      key={van.id}
      thumbnailSrc={van.thumbnailSrc?.map((imgUrl) => (
        <img className="w-full h-[246px] object-cover" src={imgUrl} alt="" />
      ))}
      name={van.name}
      vanType={van.vanType}
      sleep={van.sleep}
      location={van.location}
      currentPrice={van.currentPrice}
    />
  ));

  return (
    <CarouselContainer>
      <CarouselDescription>
        <Title title={"Find Your Perfect Van"} size={"large"} />
        <ShortText
          text={
            "Camplify is proud to be Australia’s largest and fastest-growing campervan, motorhome and caravan sharing community. We’re safely connecting holidaymakers with thousands of unique neighbourhood vans that are available to hire for their next outdoor adventure. Explore some of our featured campervans, motorhomes and caravans available for hire below."
          }
        />
      </CarouselDescription>
      <Carousel
        value={current}
        onChange={onChange}
        slides={vans}
        plugins={[
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          1024: {
            plugins: [
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          1280: {
            plugins: [
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
        }}
      />
      <Dots value={current} onChange={onChange} number={promoteVans.length} />
    </CarouselContainer>
  );
};

export default CarsCarousel;
