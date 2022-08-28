import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";

export interface ICarType {
  thumbnailSrc: string;
  name: string ;
  vanType: string;
  sleep: number;
  dailyPrice: number;
}

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

  p{padding-right:15px}
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
`


const CarCard = ({
  thumbnailSrc,
  name,
  vanType,
  sleep,
  dailyPrice,
}: ICarType) => {
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt="" />
      </CarThumbnail>
      <LinkButton text={name} theme={"text"} />
     

      <CarDetailsContainer>
        <p>{vanType}</p>
        <p>Sleeps {sleep}</p>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <BoldText>Melbourne</BoldText>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <p>From <BoldText>${dailyPrice}</BoldText> AUD/day</p>
      </CarDetailsContainer>
    </CarContainer>
  );
};

export default CarCard;
