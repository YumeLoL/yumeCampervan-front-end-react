import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        hover:border-b-4 border-secondary
    `}
`;
const DropdownNavItem = styled(NavItem)` 
  ${tw`  
  cursor-pointer
  relative
`}
`
const SubNavContainer = styled.div`
  ${tw` 
    w-[250px]
    bg-secondary
    absolute
    top-10
  `}
  a {
    ${tw` text-lg  `}
  }
`;
const SubNavItem = styled.li`
  ${tw` 
  
  `}
`

const NavItems = () => {
  const isMobile = useMediaQuery({
    maxWidth: SCREENS.sm,
  });
  const [clicked, setClicked] = useState(false);

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
            <a href="/">Get Inspired</a>
            <FontAwesomeIcon icon={faChevronUp} />
            <FontAwesomeIcon icon={faChevronDown} />
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

      <DropdownNavItem >
        <span onClick={() => setClicked(!clicked)}>
          Get Inspired
          {clicked ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
        {clicked ? (
          <>
            <SubNavContainer>
              <SubNavItem>
                <a href="/">Popular Routes</a>
              </SubNavItem>
              <SubNavItem>
                <a href="/">Blog</a>
              </SubNavItem>
            </SubNavContainer>
          </>
        ) : (
          ""
        )}
      </DropdownNavItem>

      <NavItem>
        <a href="/">Contact</a>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
