import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";
import {ButtonType} from "../../atoms/Button";
import LargeTitle, { TitleType } from "../../atoms/LargeTitle";

export interface IBanner extends ButtonType, TitleType {
   className?: string;
}

const BannerContainer = styled.div`
  ${tw`
    w-full
    text-center
    bg-secondary
    `}
`;
const BannerContent = styled.div`
  ${tw`
    px-10
    py-14
    `}
`;

const Banner = ({text, theme, title, onClick , className}:IBanner) => {
  return (
    <BannerContainer className={className}>
      <BannerContent>
        <LargeTitle title={title} />
        <Button text={text} theme={theme} onClick={onClick}/>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
