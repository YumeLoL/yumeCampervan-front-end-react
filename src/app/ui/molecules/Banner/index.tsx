import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";
import { ButtonType } from "../../atoms/Button";
import Title, { TitleType } from "../../atoms/Title";

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
  w-full
  px-10
  py-14
  `}
`;

const Banner = ({ text, theme, title, onClick, className, size }: IBanner) => {
  return (
    <BannerContainer className={className}>
      <BannerContent>
        <Title title={title} size={size} />
        <Button text={text} theme={theme} onClick={onClick} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
