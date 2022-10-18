import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Title from "../../../ui/atoms/Title";
import Text from "../../../ui/atoms/Text";
import { IVan } from "../../../libs/interface";
import { useNavigate } from "react-router-dom";
import CarCard from "../../../ui/molecules/Card/CarCard";

const baseUrl = process.env.REACT_APP_BASE_API_URL;

const CarouselContainer = styled.div`
  ${tw`
  // set 1024px screen width and make it full width
  max-w-screen-xl
  w-full
  // 
  flex
  flex-wrap
  items-center
  justify-center
  pr-2
  pl-2
  md:pl-0
  md:pr-0
  my-10
  `};
`;

const CarouselDescription = styled.div`
  ${tw`
  w-full
  flex
  flex-col
  text-center
  `}
`;

const ShortText = styled(Text)`
  ${tw`w-full m-auto px-10`}
`;

const CarsCarousel = () => {
  const navigate = useNavigate();

  const url = `${baseUrl}/vanProfile`;

  const [data, setData] = useState<IVan[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        const promoteVans = res.data.filter((vanObj: IVan) => vanObj.discount);
        setData(promoteVans);
        // console.log(data)
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const vans = data?.map((van: IVan) => (
  //   <CarCard
  //     key={van.id}
  //     name={van.name}
  //     vanType={van.vanType}
  //     sleep={van.sleep}
  //     location={van.location}
  //     currentPrice={van.currentPrice}
  //     // thumbnailSrc={van.thumbnailSrc?.map((imgUrl, i) => (
  //     //   <img
  //     //     key={i}
  //     //     className="w-full h-[200px] object-cover"
  //     //     src={imgUrl}
  //     //     alt="img"
  //     //   />
  //     // ))}
  //     toRoute={`/campervans/van/${van.id}`}
  //   />
  // ));
  // console.log("vans:", vans);

  return (
    <CarouselContainer>
      <CarouselDescription>
        <Title title={"Find Your Perfect Van"} size={"large"} />
        <ShortText
          text={
            "Camplify is proud to be Australia’s largest and fastest-growing campervan, motorhome and caravan sharing community. We’re safely connecting holidaymakers with thousands of unique neighbourhood vans that are available to hire for their next outdoor adventure. Explore some of our featured campervans, motorhomes and caravans available for hire below."
          }
        />
      </CarouselDescription>

      {loading ? (
        "on loading ......"
      ) : (
        <>
          {/* <CarouselSlide 
           vans={vans} length={data?.length}
           /> */}
          <Carousel
            plugins={[
              "infinite",
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
              768: {
                plugins: [
                  "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
              1024: {
                plugins: [
                  "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ],
              },
              1280: {
                plugins: [
                  "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 4,
                    },
                  },
                ],
              },
            }}
          >
            {data?.map((van: IVan) => {
              return (
                <CarCard
                  key={van.id}
                  name={van.name}
                  vanType={van.vanType}
                  sleep={van.sleep}
                  location={van.location}
                  currentPrice={van.currentPrice}
                  thumbnailSrc={van.thumbnailSrc}
                  onClick={() => navigate(`/campervans/van/${van.id}`)}
                />
              );
            })}
          </Carousel>
        </>
      )}
    </CarouselContainer>
  );
};

export default CarsCarousel;
