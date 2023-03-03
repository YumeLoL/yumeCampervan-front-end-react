import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import bgVideo from "../../../../images/bgvideo.mp4";
import useFetch from "../../../hooks/useFetch";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";
import Banner from "../../../ui/molecules/Banner";
import PostCard from "../../../ui/molecules/Card/PostCard";
import MainLayout from "../../../ui/organisms/MainLayout";

const HeroContainer = styled.div`
  ${tw`
  w-full
  h-[200px]
  sm:h-[300px]
  md:h-[400px]
  lg:h-[500px]
  xl:h-[600px]
  overflow-hidden
  flex
  flex-col
  justify-center
  items-center
  relative
  mb-7
  `}
`;
const Video = styled.video`
  ${tw`
  w-full
  absolute
  top-0
  sm:top-[-100px]
  xl:top-[-250px]
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
  px-8
  `}
`;
const BriefContent = styled(Text)`
  ${tw`
  text-white
  font-light
  `}
`;

const PopularRoutesPage = () => {
  // const url = `http://localhost:4000/highlights`;
  // const { data, loading } = useFetch(url);

  return (
    <MainLayout>
      <HeroContainer>
        <Video autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
        </Video>
        <HeroContent>
          <Title
            title={"Popular Routes"}
            size={"medium"}
            className="text-white"
          />
          <BriefContent
            text={
              "Want to see how others travel with us? Our popular routes range from family escapes, friend reunions, to trips of a lifetime exploring the hidden gems of Australia (and so much more!). Read the stories a few of our customers have put together while out discovering Australia."
            }
            className="text-white"
          />
        </HeroContent>
      </HeroContainer>
      {/* <PostCard loading={loading} data={data} /> */}
      <Banner
        text={"Contact Us"}
        theme={"outlined"}
        title={
          "If you have any questions or feedback you can contact us 24 hours a day / 7 days a week."
        }
        size={"medium"}
      />
    </MainLayout>
  );
};

export default PopularRoutesPage;
