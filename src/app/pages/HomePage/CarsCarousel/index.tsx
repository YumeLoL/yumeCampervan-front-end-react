import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { data } from "../../../../data/data";
import { IVan } from "../../../libs/interface";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";
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

  const [promoteVans, setPromoteVans] = useState<IVan[]>();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     setLoading(true);

  //     try {
  //       const promoteVans = data.vanProfile.filter((vanObj: IVan) => vanObj.discount);
  //       setPromoteVans(promoteVans);
  //       // console.log(data)
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     setLoading(false);

  // }, []);

  // handle dots in slider
  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
  };

  return (
    <></>
    // <CarouselContainer>
    //   <CarouselDescription>
    //     <Title title={"Find Your Perfect Van"} size={"large"} />
    //     <ShortText
    //       text={
    //         "Camplify is proud to be Australia’s largest and fastest-growing campervan, motorhome and caravan sharing community. We’re safely connecting holidaymakers with thousands of unique neighbourhood vans that are available to hire for their next outdoor adventure. Explore some of our featured campervans, motorhomes and caravans available for hire below."
    //       }
    //     />
    //   </CarouselDescription>

    //   {loading ? (
    //     "on loading ......"
    //   ) : (
    //     <>
    //       <Carousel
    //         value={value}
    //         onChange={onChange}
    //         plugins={[
    //           "infinite",
    //           {
    //             resolve: slidesToShowPlugin,
    //             options: {
    //              numberOfSlides: 4
    //             }
    //           },
    //         ]}
    //         breakpoints={{
    //           640: {
    //             plugins: [
    //               "infinite",
    //               {
    //                 resolve: slidesToShowPlugin,
    //                 options: {
    //                   numberOfSlides: 1,
    //                 },
    //               },
    //             ],
    //           },
    //           768: {
    //             plugins: [
    //               "infinite",
    //               {
    //                 resolve: slidesToShowPlugin,
    //                 options: {
    //                   numberOfSlides: 2,
    //                 },
    //               },
    //             ],
    //           },
    //           1024: {
    //             plugins: [
    //               "infinite",
    //               {
    //                 resolve: slidesToShowPlugin,
    //                 options: {
    //                   numberOfSlides: 3,
    //                 },
    //               },
    //             ],
    //           },
    //           1280: {
    //             plugins: [
    //               "infinite",
    //               {
    //                 resolve: slidesToShowPlugin,
    //                 options: {
    //                   numberOfSlides: 4,
    //                 },
    //               },
    //             ],
    //           },
    //         }}
    //       >
    //         {loading
    //           ? "Loading please wait"
    //           : promoteVans?.map((van: IVan) => {
    //               return (
    //                 <CarCard
    //                   key={van.id}
    //                   name={van.name}
    //                   vanType={van.vanType}
    //                   sleep={van.sleep}
    //                   location={van.location}
    //                   currentPrice={van.currentPrice}
    //                   thumbnailSrc={van.thumbnailSrc}
    //                   onClick={() => navigate(`/campervans/van/${van.id}`)}
    //                 />
    //               );
    //             })}
    //       </Carousel>
    //       <Dots value={value} onChange={onChange} number={promoteVans?.length} />
    //     </>
    //   )}
    // </CarouselContainer>
  );
};

export default CarsCarousel;
