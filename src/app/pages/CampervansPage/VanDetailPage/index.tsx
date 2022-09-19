import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { IVan } from "../../../libs/interface";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";
import MainLayout from "../../../ui/organisms/MainLayout";


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

const VanDetailPage = () => {
  const { vanId } = useParams();

  const url = `http://localhost:4000/vanProfile/${vanId}`;
  const [data, setData] = useState<IVan>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>("");
  
  const [current, setCurrent] = useState(0);
  const onChange = (curent: number) => {
    setCurrent(curent);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  console.log(data);

  return (
    <MainLayout>
      {loading ? (
        "on loading ......"
      ) : (
        <>
          <CarouselContainer>
            <Carousel
              value={current}
              onChange={onChange}
              slides={data?.thumbnailSrc?.map((imgUrl: string, i: number) => (
                <img
                  key={i}
                  className="w-full h-[246px] object-cover"
                  src={imgUrl}
                  alt=""
                />
              ))}
              offset={10}
              plugins={[
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    "infinite",
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                1536: {
                  plugins: [
                    "arrows",
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            />
          </CarouselContainer>
          <VanProfileContainer>
            <VanDetailContainer>
              <VanTitleAvatar>
                <Title
                  className="text-secondary flex items-center"
                  size={"large"}
                  title={data?.name as string}
                />
                <Avatar>
                  <AvatarIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </AvatarIcon>
                  <span className="text-center font-bold text-2xl">Ban</span>
                </Avatar>
              </VanTitleAvatar>

              <strong className="text-3xl inline-block my-4">
                {data?.location}
              </strong>

              <InfoSession>
                <strong>sleep: {data?.sleep}</strong>
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
    </MainLayout>
  );
};

export default VanDetailPage;
