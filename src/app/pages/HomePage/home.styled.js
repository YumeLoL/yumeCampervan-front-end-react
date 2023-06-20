import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../libs/responsive";

export const AboutUsContainer = styled.div`
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

export const CarContainer = styled.div`
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

export const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
    `}
`;

export const HeroContainer = styled.div`
  min-height: 400px;
  @media (min-width: ${SCREENS.md}) {
    height: 600px;
  }
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    justify-center
    items-center
    `}
`;

export const TopMain = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
  `}
`;

export const LeftContainer = styled.div`
  ${tw`
    w-1/2
    h-auto
    flex
    flex-col
    justify-end
    items-start
    m-4
    relative
    `}
`;

export const RightContainer = styled.div`
  ${tw`
    w-1/2
    mt-36
    flex
    flex-col
    relative
    `}
`;

export const SearchContainer = styled.div`
  ${tw`
  w-full
  flex
  sm:flex-row
  md:flex-row
  lg:flex-row
  xl:flex-row
  `}
`;

export const BlobContainer = styled.div`
  width: 25em;
  height: 10em;
  position: absolute;
  right: -7em;
  top: -10em;
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
    top: -17em;
    transform: rotate(-60deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 90em;
    max-height: 40em;
    right: 0em;
    top: -20em;
    transform: rotate(-65deg);
  }
`;

export const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -2em;
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
    top: -3em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -7em;
  }
`;

export const BookStepContainer = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;

export const StepsContainer = styled.div`
  ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-16
      lg:mt-24
    `};
`;

export const StepContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-gray-500
      m-3
      px-8
    `};
`;

export const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    w-28
    h-28
    md:w-40
    md:h-40
    flex
    rounded-lg
    items-center
    justify-center
    p-2
    `};
`;

export const StepTitle = styled.h4`
  ${tw`
      text-black
      text-lg
      md:text-2xl
      font-semibold
      my-4
    `};
`;

export const StepIcon = styled.span`
  ${tw`
      text-secondary
      text-6xl
    `};
`;
