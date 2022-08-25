import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import orangeVan from "../../../assets/images/orange-camper-van.png";
import { SCREENS } from "../../libs/responsive";
import Text from "../../ui/atoms/Text";

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-evenly
        px-4
        py-7
    `}
`;
const CarContainer = styled.div`
  height: 15em;
  width: auto;

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 33em;
    margin-left: 0;
  }

  img {
    width: auto;
    height: 100%;
  }
`;
const InfoContainer = styled.div`
  ${tw`
  md:w-1/2
  flex
  flex-col
  md:ml-6
  2xl:ml-16
    `}
`;
const Title = styled.h1`
  ${tw`
  text-black
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-normal
    `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={orangeVan} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <Text
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
