import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import MainLayout from "../../../ui/organisms/MainLayout";
import bgVideo from "../../../../images/bgvideo.mp4";
import Title from "../../../ui/atoms/Title";
import Text from "../../../ui/atoms/Text";
import Button from "../../../ui/atoms/Button";
import { Link } from "react-router-dom";
import { Marginer } from "../../../ui/atoms/Marginer";

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

//
const CardContainer = styled.div`
  ${tw` 
  max-w-screen-2xl
  flex 
  flex-wrap 
  align-middle 
  justify-center
  my-8
  `}
`;
const Content = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-[22em]
    max-h-full
    w-full
    flex
    flex-col
    items-center
    rounded-md
    m-2
    md:m-4
  `};

  p {
    padding-right: 15px;
  }
`;
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
  return (
    <MainLayout>
      <HeroContainer>
        <Video>
          <video autoPlay loop>
            <source src={bgVideo} type="video/mp4" />
          </video>
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
        <Content>
          <Link to={"/home"}>
            <img
              src="https://thl.widen.net/content/yaanagffhm/jpeg/maui%20beach%20DEC%202014%20AU%20Australia%20North%20QLD%20Queensland%20Andrew%20Wation%20Image%20Driving%20Beachfront%20Exterior.jpg?crop=true&keep=c&q=80&color=ffffffff&u=gvvvh2&w=360&h=193"
              alt="pic"
            />
            <div className="p-5">
              <Title title={"Great Tropical Drive"} size={"medium"} />

              <Title title={"3 DAYS"} size={"large"} className="text-red-700 mt-4"/>

              <BriefInfoContainer>
                <div className="grid grid-cols-2 gap-4">
                  <span>{"Great Barrier"}</span>
                  <span>{"greate ocean road"}</span>
                  <span>{"Wet Tropics"}</span>
                  <span>{"Eungella"}</span>
                </div>
              </BriefInfoContainer>

              <hr className="w-full h-[1.1px] bg-gray-300 my-4" />

              <LinkButton
                text={"View Details"}
                theme={"outlined"}
              />
            </div>
          </Link>
        </Content>
      </CardContainer>
    </MainLayout>
  );
};

export default PopularRoutesPage;
