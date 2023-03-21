import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { getVanById } from "../httpService/api/vanApi";

import Layout from "../ui/organisms/Layout";
import Title from "../ui/atoms/Title";
import Text from "../ui/atoms/Text";
import { IVan } from "../libs/interface/van";
import { Booking } from "../components/Booking";
import { PictureList } from "../components/PictureList";


const VanDetailPage = () => {
  const { vanId } = useParams();
  if(!vanId) {
    // Render an error message or fallback UI if the van data is not available
    return <div>Sorry, we couldn't find a van with ID {vanId}.</div>; 
  }

  const [loading, setLoading] = useState(false);
  const [van, setVan] = useState<IVan>();

  
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await getVanById(vanId);
        setVan(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Request error:", err);
      }
    };
  
    fetchData();
  }, []);


  return (
    <Layout>
      {loading ? (
        "on loading ......"
      ) : (
        <>
          <CarouselContainer>
            {
              van?.vanImg ? <img src={van.vanImg[0]} style={{width: '100%', objectFit: "cover"}} /> : <img src={'https://d38b8me95wjkbc.cloudfront.net/assets/fallback/default-f339cd00658ef86db5dbd0afc674f221b70f6090c0971a0a0f930a16c1a91a45.jpg'} alt="Phone coming soon" />
            }
           
            {/* <ImgCarousel imgUrl={van?.vanImg}/> */}
          </CarouselContainer>
          
          <VanProfileContainer>
            <VanDetailContainer>
              <VanTitleAvatar>
                <Title
                  className="text-secondary flex items-center"
                  size={"large"}
                  title={van?.vanName}
                />
              </VanTitleAvatar>

              <strong className="text-3xl inline-block my-4">
                location: {van?.vanLocation}
              </strong>

              <InfoSession>
                <strong>sleep: {van?.berths}</strong>
                <strong>Van Type: {van?.vanTypeName}</strong>
                
              </InfoSession>

              <Text
                text={van?.vanDescription as string}
              />

              <hr />
              <PictureList imgUrl={van?.vanImg}/>
            </VanDetailContainer>

            <VanBookingContainer>
              <Booking price={van?.vanPricePerDay} vanId={vanId}/>
            </VanBookingContainer>
          </VanProfileContainer>{" "}
        </>
      )}
    </Layout>
  );
};

export default VanDetailPage;


const CarouselContainer = styled.div`
  ${tw`
    w-full
    h-[450px]
    my-8
    overflow-hidden
    // relative
    `}
`;
const VanProfileContainer = styled.div`
  ${tw`
    h-auto
    w-full
    p-24
    flex
    justify-between
    `}
`;

const VanDetailContainer = styled.div`
  ${tw`
  w-2/3
  `}
`;

const VanBookingContainer = styled.div`
  ${tw`
    w-[300px]
    flex
    justify-end
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


