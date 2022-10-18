import React, { useState } from "react";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IVan } from "../../../../libs/interface";

const CarouselSlide = ({ vans, length }: any) => {
  const [current, setCurrent] = useState(0);
  const onChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <>
      {/* <Carousel 
    //   value={current}
    //   onChange={onChange}
    //   slides={vans}
   
    //   breakpoints={{
    //     640: {
    //       plugins: [
    //         "infinite",
    //         {
    //           resolve: slidesToShowPlugin,
    //           options: {
    //             numberOfSlides: 1,
    //           },
    //         },
    //       ],
    //     },
    //     768: {
    //       plugins: [
    //         "infinite",
    //         {
    //           resolve: slidesToShowPlugin,
    //           options: {
    //             numberOfSlides: 2,
    //           },
    //         },
    //       ],
    //     },
    //     1024: {
    //       plugins: [
    //         "infinite",
    //         {
    //           resolve: slidesToShowPlugin,
    //           options: {
    //             numberOfSlides: 3,
    //           },
    //         },
    //       ],
    //     },
    //     1280: {
    //       plugins: [
    //         "infinite",
    //         {
    //           resolve: slidesToShowPlugin,
    //           options: {
    //             numberOfSlides: 4,
    //           },
    //         },
    //       ],
    //     },
    //   }}
    >
      {vans} 
     </Carousel> */}

      {/* <Dots value={current} onChange={onChange} number={length} /> */}
    </>
  );
};

export default CarouselSlide;
