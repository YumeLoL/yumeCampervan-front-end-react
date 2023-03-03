import styled from "styled-components";
import tw from "twin.macro";
import BlobImg from "../../../../images/blob.svg";
import BlueCampervan from "../../../../images/blue-camper-van.png";
import { SCREENS } from "../../../libs/responsive";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";
import SearchCard from "./SearchCard";

const HeroContainer = styled.div`
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
const TopMain = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
  `}
`
const LeftContainer = styled.div`
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
const RightContainer = styled.div`
  ${tw`
    w-1/2
    mt-36
    flex
    flex-col
    relative
    `}
`;
const SearchContainer = styled.div`
  ${tw`
  w-full
  flex
  sm:flex-row
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
const StandaloneCar = styled.div`
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

const HeroSession = () => {
  return (
    <HeroContainer>
      <TopMain>
      <LeftContainer>
        <Title
          title={"Rent The Best Car Lorem ipsum dolor sit amet."}
          size={"large"}
        />
        <Text
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem, sint dicta sequi ratione facere ipsum fugiat qui, impedit molestias, doloremque soluta at. Minus labore a aut hic nisi, autem laudantium voluptas ratione corporis ipsam."
          }
        />
      </LeftContainer>

      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="blobImg" />
        </BlobContainer>
        <StandaloneCar>
          <img src={BlueCampervan} alt="blueCampervan" />
        </StandaloneCar>
      </RightContainer>
      </TopMain>
      <SearchContainer>
        <SearchCard />
      </SearchContainer>
      
    </HeroContainer>
  );
};

export default HeroSession;
