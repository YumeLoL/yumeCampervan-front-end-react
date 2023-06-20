import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface IProps {
  imgUrl: string[] | undefined;
  //flag: boolean;
}

export const ImgCarousel = ({ imgUrl }: IProps) => {
  const carousel = useRef<AliceCarousel>(null);

  let items;
  if (typeof imgUrl === "undefined" || imgUrl === null) {
    return (
      <img
        src={
          "https://d38b8me95wjkbc.cloudfront.net/assets/fallback/default-f339cd00658ef86db5dbd0afc674f221b70f6090c0971a0a0f930a16c1a91a45.jpg"
        }
        alt="Phone coming soon"
      />
    );
  } else {
    items = imgUrl.map((url, index) => {
      return (
        <img
          key={index}
          src={url}
          alt=""
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    });
  }

  return (
    <>
      <AliceCarousel
        key="carousel"
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        ref={carousel}
      />
      <nav key="nav" className="b-refs-navs">
        {items.map((item, i) => {
          return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
        })}
      </nav>
      <BtnL key="btns" className="b-refs-buttons">
        <button onClick={(e) => carousel?.current?.slidePrev(e)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </BtnL>
      <BtnR>
        <button onClick={(e) => carousel?.current?.slideNext(e)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </BtnR>
    </>
  );
};

const BtnL = styled.div`
  ${tw`
absolute
top-[42%] 
left-[5px]
text-gray-50
hover:(text-gray-200 transition ease-in-out duration-150)
text-3xl
`}
`;

const BtnR = styled.div`
  ${tw`
absolute 
top-[42%] 
right-[5px]
text-gray-50
hover:(text-gray-200 transition ease-in-out duration-150)
text-3xl
`}
`;
