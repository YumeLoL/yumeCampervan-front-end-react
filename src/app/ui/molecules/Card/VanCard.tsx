import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import Button from "../../atoms/Button";
import { IVan } from "../../../libs/interface/van";
import {ImgCarousel} from "../../../components/ImgCarousel";


const CarCard = (props:IVan) => {
  const {berths, vanImg, vanLocation, vanName, vanPricePerDay, vanTypeId, vanTypeName} = props;  
  const navigate = useNavigate();
  const vanId = useParams();


  return (
    <CarContainer>
      <CarThumbnail>
        <ImgCarousel imgUrl={vanImg}/>
        {/* <img src={vanImageUrl} alt=""/> */}
      </CarThumbnail>
      <LinkButton text={vanName} theme={"text"} onClick={()=> {navigate(`/campervans/${vanId}`)}} />

      <CarDetailsContainer>
        <p>Sleeps: {berths}</p>
        <p>{vanTypeName}</p>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <BoldText>Location: {vanLocation}</BoldText>
      </CarDetailsContainer>

      <CarDetailsContainer>
        <p>
          <BoldText className="text-red-700">${vanPricePerDay}</BoldText> AUD/day
        </p>
      </CarDetailsContainer>
    </CarContainer>
  );
};

export default CarCard;


const CarContainer = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-[18em]
    max-h-full
    w-full
    flex
    flex-col
    items-center
    rounded-md
    pb-8
    m-2
    md:m-4
  `};

  p {
    padding-right: 15px;
  }
`;
const StyledLink = styled(Link)`
  ${tw`
  transition-opacity 
  `}
  :hover {
    opacity: 0.5;
  }
`;
const CarThumbnail = styled.div`
  ${tw`
  w-full
  h-[200px]
  relative
  `}
`;

const LinkButton = styled(Button)`
  ${tw`
    text-2xl
    font-bold
    text-primary
    mx-0 my-3
  `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-start
    px-5
    my-2
  `};
`;

const BoldText = styled.span`
  ${tw`
   text-xl
   font-bold
  `}
`;
const LineThroughText = styled.span`
  ${tw`
   line-through
   font-bold
   text-gray-500
  `}
`;
const ArrowLeftButton = styled.button`
  ${tw`
  absolute 
  top-[42%] 
  left-[5px]
  text-gray-50
  hover:(text-gray-200 transition ease-in-out duration-150)
  text-3xl
  z-10
  `}
`;
const ArrowRightButton = styled.button`
  ${tw`
  absolute 
  top-[42%] 
  right-[5px]
  text-3xl
  text-gray-50
  hover:(text-gray-200 transition ease-in-out duration-150)
  z-10
  `}
`;

