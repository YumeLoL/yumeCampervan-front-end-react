import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@brainhubeu/react-carousel/lib/style.css";
import Button from "../../../atoms/Button";
import { IVan } from "../../../../libs/interface";

const CarContainer = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-[22em]
    max-h-full
    w-full
    flex
    flex-col
    items-center
    rounded-md
    pb-8
    m-2
    md:m-4
  `};

  p {
    padding-right: 15px;
  }
`;

const CarThumbnail = styled.div`
  ${tw`
  w-full
  h-[246px]
  relative
  `}
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
const ArrowLeftButton = styled.button`
  ${tw`
  absolute 
  top-[42%] 
  left-[5px]
  text-gray-50
  hover:(text-gray-200 transition ease-in-out duration-150)
  text-3xl
  z-10
  `}
`;
const ArrowRightButton = styled.button`
  ${tw`
  absolute 
  top-[42%] 
  right-[5px]
  text-3xl
  text-gray-50
  hover:(text-gray-200 transition ease-in-out duration-150)
  z-10
  `}
`;

const CarCard = ({
  thumbnailSrc,
  name,
  vanType,
  sleep,
  location,
  originalPrice,
  currentPrice,
  onClick,
}: IVan) => {
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
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <ArrowLeftButton>
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </ArrowLeftButton>
                ),
                arrowLeftDisabled: (
                  <ArrowLeftButton>
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                  </ArrowLeftButton>
                ),
                arrowRight: (
                  <ArrowRightButton>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </ArrowRightButton>
                ),
                arrowRightDisabled: (
                  <ArrowRightButton>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </ArrowRightButton>
                ),
                addArrowClickHandler: true,
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
        <BoldText>{location}</BoldText>
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
