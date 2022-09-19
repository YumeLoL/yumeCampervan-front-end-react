import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../../../images/logo.png";

const LogoContainer = styled.div`
  ${tw` 
    flex     
    items-center 
  `}
`;
const Image = styled.div`
  ${tw` h-8 md:h-12 items-center `}
  img {
    width: auto;
    height: 100%;
  }
`;
const TextLogo = styled.div`
  ${tw`  hidden sm:contents sm:text-lg md:text-xl font-bold m-2`}
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={logo} alt="logo" />
      </Image>
      <TextLogo>YUME.Camp</TextLogo>
    </LogoContainer>
  );
};

export default Logo;
