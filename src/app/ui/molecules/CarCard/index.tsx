import React from "react";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";
import popTop from "../../../../assets/campervan/pop-top.jpg";

interface CarType {
  thumbnailSrc: string;
  name: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const CarCard = () => {
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={popTop} alt="" />
      </CarThumbnail>
      <CarName>Audi S3 Car</CarName>
      <PricesContainer>
        <DailyPrice>
          $250
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          $1600
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Seperator />

      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>10k</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>Auto</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>Petrol</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <Button text="Rent Now" theme={"text"} />
    </CarContainer>
  );
};

export default CarCard;
