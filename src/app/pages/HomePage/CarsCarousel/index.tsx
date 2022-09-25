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

  const url = `http://localhost:4000/vanProfile`;
  const [data, setData] = useState<IVan[]>();
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
        const promoteVans = res.data.filter((vanObj: IVan) => vanObj.discount);
        setData(promoteVans);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  const vans = data?.map((van: IVan) => (
    <CarCard
      key={van.id}
      name={van.name}
      vanType={van.vanType}
      sleep={van.sleep}
      location={van.location}
      currentPrice={van.currentPrice}
      toRoute={`/campervans/${van.id}`}
      thumbnailSrc={van.thumbnailSrc?.map((imgUrl, i) => (
        <img
          key={i}
          className="w-full h-[200px] object-cover"
          src={imgUrl}
          alt="img"
        />
      ))}
    />
  ));

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
            <Carousel
              value={current}
              onChange={onChange}
              slides={vans}
              plugins={[
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
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
            />
            <Dots value={current} onChange={onChange} number={data?.length} />
          </>
        )}
    </CarouselContainer>
  );
};

export default CarsCarousel;
