import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../libs/responsive";
import { push as Menu } from "react-burger-menu";
import "./index.css";

const ListContainer = styled.ul`
  ${tw` 
        flex
        flex-row
  `}
`;
const NavItem = styled.li`
  ${tw` 
        md:text-xl
        m-2
        md:m-4
        font-bold
        text-base
        self-center
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({
    maxWidth: SCREENS.sm,
  });

  if (isMobile)
    return (
      <ListContainer>
        <Menu right>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/">Cars</a>
          </NavItem>
          <NavItem>
            <a href="/">Services</a>
          </NavItem>
          <NavItem>
            <a href="/">Contact</a>
          </NavItem>
        </Menu>
      </ListContainer>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="/">Home</a>
      </NavItem>
      <NavItem>
        <a href="/">Cars</a>
      </NavItem>
      <NavItem>
        <a href="/">Services</a>
      </NavItem>
      <NavItem>
        <a href="/">Contact</a>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
