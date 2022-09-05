import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import MainLayout from "../../../ui/organisms/MainLayout";
import tw from "twin.macro";
import styled from "styled-components";

// fake data
const VanImages = [
  <img
    className="w-auto h-full"
    src={require("../../../../assets/campervan/popTop/pop-top.jpg")}
    alt=""
  />,
  <img
    className="w-auto h-full"
    src={require("../../../../assets/campervan/popTop/1.jpeg")}
    alt=""
  />,
  <img className="w-auto h-full" src={require("../../../../assets/campervan/popTop/2.jpeg")} alt="" />,
  <img className="w-auto h-full" src={require("../../../../assets/campervan/popTop/3.jpeg")} alt="" />,
];

const CarouselContainer = styled.div`
  ${tw`
    w-full
    h-[500px]
    my-8
    `}
`;

const VanDetailPage = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);
  const onChange = (curent: number) => {
    setCurrent(curent);
  };
  console.log(id);

  return (
    <MainLayout>
      <CarouselContainer>
        <Carousel
          value={current}
          onChange={onChange}
          slides={VanImages}
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

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas
        veritatis iusto praesentium ex sint, quia molestiae animi aspernatur
        suscipit. Vel, iure. Rem eaque expedita error soluta modi temporibus
        dolorem porro aspernatur nobis magni odio totam distinctio, magnam sint
        fugiat maiores. Itaque optio nesciunt modi nisi perferendis iure quod
        laudantium!
      </div>
    </MainLayout>
  );
};

export default VanDetailPage;
