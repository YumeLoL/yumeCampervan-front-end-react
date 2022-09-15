import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MainLayout from "../../../ui/organisms/MainLayout";
import bgVideo from "../../../../images/bgvideo.mp4";
import Title from "../../../ui/atoms/Title";
import Text from "../../../ui/atoms/Text";
import Button from "../../../ui/atoms/Button";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Banner from "../../../ui/molecules/Banner";

const HeroContainer = styled.div`
  ${tw`
  w-full
  h-[200px]
  sm:h-[300px]
  md:h-[400px]
  lg:h-[500px]
  xl:h-[750px]
  overflow-hidden
  flex
  flex-col
  justify-center
  items-center
  relative
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
const CardContainer = styled.div`
  ${tw` 
  max-w-screen-2xl
  grid grid-cols-3 gap-4
  my-8
  `}
`;
const Content = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-[26em]
    max-h-full
    w-full
    flex
    flex-col
    rounded-md
    m-2
    md:m-4
  `};

  p {
    padding-right: 15px;
  }
`;
const ImgContainer = styled.div`
  ${tw`
  w-full  
  `}
`
const LinkButton = styled(Button)`
  ${tw`
    w-full
    text-2xl
    font-bold
    text-white
    bg-secondary
    hover:( text-secondary border-secondary)
    p-3
    m-0
  `};
`;
const BriefInfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    justify-start
    my-2
  `};
`;

const PopularRoutesPage = () => {
  const { data, loading } = useFetch(`http://localhost:4000/highlights`);

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

      <CardContainer>
        {loading
          ? "loading ........"
          : data.map((highlight: any) => (
              <Content key={highlight.id}>
                <Link to={"/home"}>
                  <ImgContainer>
                    <img className="w-full" src={highlight.img} alt="pic" />
                  </ImgContainer>

                  <div className="p-5">
                    <Title title={highlight.title} size={"medium"} />

                    <Title
                      title={highlight.durations}
                      size={"medium"}
                      className="text-red-700 mt-4 block"
                    />

                    <BriefInfoContainer>
                      <div className=" grid grid-cols-2 gap-4">
                        {highlight.highlights.map((obj: any, index: number) => (
                          <span key={obj.index}>{obj}</span>
                        ))}
                      </div>
                    </BriefInfoContainer>

                    <hr className="w-full h-[1.1px] bg-gray-300 my-4" />

                    <LinkButton text={"View Details"} theme={"outlined"} />
                  </div>
                </Link>
              </Content>
            ))}
      </CardContainer>
      <Banner text={"Contact Us"} theme={"outlined"} title={"If you have any questions or feedback you can contact us 24 hours a day / 7 days a week."} size={"medium"} />
    </MainLayout>
  );
};

export default PopularRoutesPage;
