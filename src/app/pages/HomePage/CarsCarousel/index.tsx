import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import LargeTitle from "../../../ui/atoms/LargeTitle";
import Text from "../../../ui/atoms/Text";
// import { SCREENS } from "../../../libs/responsive";

import axios from "axios";

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
  // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  // const isPad = useMediaQuery({ maxWidth: SCREENS.md });

  const [test, setTest] = useState<any>();

  const handle = async () => {
    await axios.get("http://localhost:3000/vanProfile/1").then((res) => {
      setTest(res.data);
      console.log(test);
    });
  };

  return (
    <CarouselContainer>
      <button onClick={handle}>test</button>
      <div className="bg-red-500 w-full h-full">
      {test && <img className="w-full h-full" src={test.thumbnailSrc[0]} alt="" />}
      </div>

      <CarouselDescription>
        <LargeTitle title={"Find Your Perfect Van"} />
        <ShortText
          text={
            "Camplify is proud to be Australia’s largest and fastest-growing campervan, motorhome and caravan sharing community. We’re safely connecting holidaymakers with thousands of unique neighbourhood vans that are available to hire for their next outdoor adventure. Explore some of our featured campervans, motorhomes and caravans available for hire below."
          }
        />
      </CarouselDescription>
      
      {/* <Carousel
        value={current}
        onChange={onChange}
        // slides={}
        plugins={[
          "infinite",
          "arrows",
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
          768: {
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
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
        }}
      /> */}
      {/* 
      <Dots
        value={current}
        onChange={onChange}
        // number={ isMobile ? promoteVans.length : isPad? promoteVans.length : 0}
      /> */}
    </CarouselContainer>
  );
};

export default CarsCarousel;
