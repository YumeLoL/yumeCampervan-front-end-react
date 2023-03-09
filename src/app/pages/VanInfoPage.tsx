import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../ui/organisms/Layout";
import Title from "../ui/atoms/Title";
import Text from "../ui/atoms/Text";


const VanInfoPage = () => {
  const { vanId } = useParams();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
  }, []);


  return (
    <Layout>
      {loading ? (
        "on loading ......"
      ) : (
        <>
          <CarouselContainer>
            
          </CarouselContainer>
          
          <VanProfileContainer>
            <VanDetailContainer>
              <VanTitleAvatar>
                <Title
                  className="text-secondary flex items-center"
                  size={"large"}
                  title={"xx"}
                />
                <Avatar>
                  <AvatarIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </AvatarIcon>
                  <span className="text-center font-bold text-2xl">Ban</span>
                </Avatar>
              </VanTitleAvatar>

              <strong className="text-3xl inline-block my-4">
                {"location"}
              </strong>

              <InfoSession>
                <strong>sleep: xx</strong>
                <strong>Tow</strong>
                <strong>Deliver</strong>
              </InfoSession>

              <Text
                text={`Description: Pop-Top Trailer 17.56-1. Will comfortably sleep a
              family of up to 6, Quick and easy set-up with a pop-top roof, 2
            slide out beds (queen and double) and a roll out awning. Comforts of
            air-conditioning/heating and microwave (only with 240 volt power), 4
            burner cook-top and grill and large 3 way fridge with freezer.
            Pantry basics included. This van is also equipped with solar.`}
              />

              <FeaturedList></FeaturedList>
            </VanDetailContainer>
            <VanBookingContainer>sdfsdfs</VanBookingContainer>
          </VanProfileContainer>{" "}
        </>
      )}
    </Layout>
  );
};

export default VanInfoPage;


const CarouselContainer = styled.div`
  ${tw`
    w-full
    h-[500px]
    my-8
    `}
`;
const VanProfileContainer = styled.div`
  ${tw`
    max-w-screen-2xl
    flex
    flex-wrap
    my-16
    `}
`;
const VanDetailContainer = styled.div`
  ${tw`
    w-2/3
    `}
`;
const VanTitleAvatar = styled.div`
  ${tw`
    w-full
    flex
    justify-between
    `}
`;
const Avatar = styled.div`
  ${tw`
    flex
    flex-col
    align-middle
    justify-center
    `}
`;
const AvatarIcon = styled.div`
  ${tw` 
    w-24
    h-24
    text-secondary
    text-6xl
    text-center
    flex
    items-center
    justify-center
    rounded-full
    border-4
    border-secondary
    `}
`;
const InfoSession = styled.div`
  ${tw`
  flex
  w-full
  mb-4
  text-xl
   `}
  strong {
    margin-right: 2rem;
  }
`;
const FeaturedList = styled.div`
  ${tw` `}
`;
const VanBookingContainer = styled.div`
  ${tw`
    w-1/3
    `}
`;
