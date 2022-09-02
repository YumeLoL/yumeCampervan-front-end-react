import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../../atoms/Logo";
import NavItems from "./NavItems";

const NavbarContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    min-h-0
    h-20
    px-4
    lg:px-8
    flex
    justify-between
    `}
`;
const LogoContainer = styled.div`
  ${tw` flex items-center`}
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
