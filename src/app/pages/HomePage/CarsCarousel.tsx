import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CarCard, { ICarType } from "../../ui/molecules/CarCard";
import img1 from "../../../assets/campervan/pop-top.jpg";
import img2 from "../../../assets/campervan/camper-trailer.jpg";
import img3 from "../../../assets/campervan/campervan-1.jpg";
import img4 from "../../../assets/campervan/motorhome.jpeg";
import LargeTitle from "../../ui/atoms/LargeTitle";
import Text from "../../ui/atoms/Text";

const testCampervan1: ICarType = {
  thumbnailSrc: img1,
  name: "Pop Top Trailer",
  vanType: "Caravan",
  sleep: 4,
  dailyPrice: 100,
};
const testCampervan2: ICarType = {
  thumbnailSrc: img2,
  name: "Camper Trailer",
  vanType: "Caravan",
  sleep: 3,
  dailyPrice: 100,
};
const testCampervan3: ICarType = {
  thumbnailSrc: img3,
  name: "Campervan",
  vanType: "Campervan",
  sleep: 4,
  dailyPrice: 100,
};
const testCampervan4: ICarType = {
  thumbnailSrc: img4,
  name: "Motorhome",
  vanType: "Motorhome",
  sleep: 4,
  dailyPrice: 100,
};

const PromoteVan = [
  <CarCard {...testCampervan1} />,
  <CarCard {...testCampervan2} />,
  <CarCard {...testCampervan3} />,
  <CarCard {...testCampervan4} />,
  <CarCard {...testCampervan4} />,
  <CarCard {...testCampervan4} />,
  <CarCard {...testCampervan4} />,
];

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
  ${tw`w-full px-10`}
`;

const CarsCarousel = () => {
  const [curent, setCurent] = useState(0);

  const onChange = (curent: number) => {
    setCurent(curent);
  };

  return (
    <CarouselContainer>
      <CarouselDescription>
        <LargeTitle title={"Find your perfect van"} />
        <ShortText
          text={
            "Camplify is proud to be Australia’s largest and fastest-growing campervan, motorhome and caravan sharing community. We’re safely connecting holidaymakers with thousands of unique neighbourhood vans that are available to hire for their next outdoor adventure. Explore some of our featured campervans, motorhomes and caravans available for hire below."
          }
        />
      </CarouselDescription>
      <Carousel
        value={curent}
        onChange={onChange}
        slides={PromoteVan}
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
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          1200: {
            plugins: [
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

      <Dots value={curent} onChange={onChange} number={5} />
    </CarouselContainer>
  );
};

export default CarsCarousel;
