import React, { useState } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";
import { ICarType } from "../../../libs/interface";



const CarContainer = styled.div`
  max-width: 22em;
  max-height: 100%;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    rounded-md
    pb-8
    sm:m-2
    md:m-4
  `};

  p {
    padding-right: 15px;
  }
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LinkButton = styled(Button)`
  ${tw`
    text-2xl
    font-bold
    text-primary
    my-3
  `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-start
    px-5
    my-2
  `};
`;

const BoldText = styled.span`
  ${tw`
   text-xl
   font-bold
  `}
`;
const LineThroughText = styled.span`
  ${tw`
   line-through
   font-bold
   text-gray-500
  `}
`;

const CarCard = ({
  id,
  thumbnailSrc,
  name,
  vanType,
  sleep,
  originalPrice,
  currentPrice,
  onClick,
}: ICarType) => {
  const [current, setCurrent] = useState(0);
  const onChange = (curent: number) => {
    setCurrent(curent);
  };

  return (
    <CarContainer>
      <CarThumbnail>
        <Carousel
          value={current}
          onChange={onChange}
          slides={thumbnailSrc}
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
        />
      </CarThumbnail>

      <LinkButton text={name} theme={"text"} onClick={onClick} />

      <CarDetailsContainer>
        <p>{vanType}</p>
        <p>Sleeps {sleep}</p>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <BoldText>Melbourne</BoldText>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <p>
          <LineThroughText>${originalPrice}</LineThroughText> From{" "}
          <BoldText className="text-red-700">${currentPrice}</BoldText> AUD/day
        </p>
      </CarDetailsContainer>
    </CarContainer>
  );
};

export default CarCard;
