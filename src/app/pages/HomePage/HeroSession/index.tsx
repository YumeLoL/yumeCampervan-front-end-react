import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../../libs/responsive";
import Button from "../../../ui/atoms/Button";
import Text from "../../../ui/atoms/Text";
import BlobImg from "../../../../images/blob.svg";
import BlueCampervan from "../../../../images/blue-camper-van.png";

const HeroContainer = styled.div`
  min-height: 400px;
  @media (min-width: ${SCREENS.md}) {
    height: 800px;
  }
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    `}
`;
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    justify-center
    items-start
    m-4
    relative
    `}
`;
const RightContainer = styled.div`
  ${tw`
    w-1/2
    mt-36
    flex
    flex-col
    relative
    `}
`;
const Slogan = styled.div`
  ${tw`
    font-bold
    text-black
    md:font-extrabold
    text-2xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
    lg:font-black
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    mb-4
    `}
`;
const ButtonContainer = styled.div`
  ${tw`
        flex
        flex-row
        sm:flex-col
        md:flex-row
        lg:flex-row
        xl:flex-row
    `}
`;
const BlobContainer = styled.div`
  width: 25em;
  height: 10em;
  position: absolute;
  right: -7em;
  top: -7em;
  z-index: 2;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 45em;
    max-height: 10em;
    right: -7em;
    top: -14em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 65em;
    max-height: 30em;
    right: 2em;
    top: -15em;
    transform: rotate(-60deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 90em;
    max-height: 40em;
    right: 0em;
    top: -15em;
    transform: rotate(-65deg);
  }
`;
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: 0;
  position: absolute;
  z-index: 5;
  
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: 0;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: 0;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: 0;
  }
`;

const HeroSession = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <Slogan>Rent The Best Car Lorem ipsum dolor sit amet.</Slogan>
        <Text
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem, sint dicta sequi ratione facere ipsum fugiat qui, impedit molestias, doloremque soluta at. Minus labore a aut hic nisi, autem laudantium voluptas ratione corporis ipsam."
          }
        />
        <ButtonContainer>
          <Button text={"Book Your Car"} theme={"outlined"} />
          <Button text={"Check Our Services"} theme={"filled"} />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="blobImg" />
        </BlobContainer>
        <StandaloneCar>
          <img src={BlueCampervan} alt="blueCampervan" />
        </StandaloneCar>
      </RightContainer>
    </HeroContainer>
  );
};

export default HeroSession;
