import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../../libs/responsive";
import MainLayout from "../../../ui/organisms/MainLayout";
import bgVideo from "../../../../images/bgvideo.mp4";
import Title from "../../../ui/atoms/Title";
import Text from "../../../ui/atoms/Text";

const HeroContainer = styled.div`
  ${tw`
  relative
  w-full
  min-h-[220px]
  sm:h-[100px]
  md:h-[300px]
  lg:h-[450px]
  overflow-hidden
  flex
  justify-center
  align-bottom
  `}
`;
const Video = styled.div`
  ${tw`
  w-full
  h-auto
  absolute
  top-0
  sm:top-[-100px]
  lg:top-[-200px]
  left-0
  z-[-1]
  `}
`;
const HeroContent = styled.div`
  ${tw`
  max-w-screen-2xl
  h-auto
  flex
  flex-col
  justify-end
  px-4
  `}
`;
const BriefContent = styled(Text)`
  ${tw`
  text-white
  font-light
  `}
`;

const PopularRoutesPage = () => {
  return (
    <MainLayout>
      <HeroContainer>
       <Video>
         <video autoPlay loop>
           <source src={bgVideo} type="video/mp4"/>
         </video>
       </Video>
       <HeroContent>
          <Title title={"Popular Routes"} size={"medium"} className="text-white" />
          <BriefContent text={"Want to see how others travel with us? Our popular routes range from family escapes, friend reunions, to trips of a lifetime exploring the hidden gems of Australia (and so much more!). Read the stories a few of our customers have put together while out discovering Australia."} className="text-white"/>
       </HeroContent>
      </HeroContainer>


     
    </MainLayout>
  );
};

export default PopularRoutesPage;
