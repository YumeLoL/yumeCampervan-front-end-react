import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useClickClose from "../../../hooks/useClickClose";
import useMenu from "../../../hooks/useMenu";

import logo from "../../../libs/img/logo.png";
import Button from "../../atoms/Button";
import "./index.css"; 



const Navbar = () => {
  const menu = useMenu();
  const navigate = useNavigate();
  const goToRoute = (route: string) => navigate(route);
  const { isOpen, setIsOpen, menuRef } = useClickClose()

  return (
    <MainNavContainer>
      <NavbarContainer>
        <LogoContainer>
          <LogoContainer>
            <Image>
              <img src={logo} alt="logo" />
            </Image>
            <TextLogo>YUME.Camp</TextLogo>
          </LogoContainer>
        </LogoContainer>

        {/* visitor menu list*/}
        <ListContainer>
          {menu.map((menu, i) =>
            menu.submenu ? (
              <DropdownNavItem key={i} ref={menuRef}>
                <span
                  key={i}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {menu.label}
                  {isOpen ? (
                    <FontAwesomeIcon className={"pl-2"} icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon className={"pl-2"} icon={faChevronUp} />
                  )}
                </span>

                {isOpen ? (
                  <SubNavContainer key={i}>
                    {menu.submenu.map((submenu) => (
                      <SubNavItem key={i}>
                        <span
                          key={submenu.route}
                          className={`block ${submenu.active ? "active" : ""}`}
                          onClick={() => goToRoute(submenu.route)}
                        >
                          {submenu.label}
                        </span>
                      </SubNavItem>
                    ))}
                  </SubNavContainer>
                ) : (
                  ""
                )}
              </DropdownNavItem>
            ) : (
              <NavItem key={i}>
                <span
                  key={i}
                  className={`${menu.active ? "active" : ""}`}
                  onClick={() => goToRoute(menu.route)}
                >
                  {menu.label}
                </span>
              </NavItem>
            )
          )}

          <SignButton theme="outlined" text="Sign Up" onClick={()=> navigate("/signUp")}/>
          <LoginButton theme="filled" text="Login" onClick={()=> navigate("/login")}/>

          {/* member menu list */}
          

        </ListContainer>
      </NavbarContainer>
    </MainNavContainer>
  );
};

export default Navbar;



const SignButton = styled(Button)`
  ${tw`
  h-8
  w-24
  rounded-full
  ml-12
  mr-0
  mb-0
  p-0
  font-light
  border
  `}
`;
const LoginButton = styled(Button)`
  ${tw`
  h-8
  w-16
  rounded-full
  ml-4
  mr-0
  mb-0
  p-0
  font-light
  border
  `}
`;
const MainNavContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    z-50
    `}
`;
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
    z-50
    `}
`;


const LogoContainer = styled.div`
  ${tw` flex items-center`}
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


const ListContainer = styled.div`
  ${tw` 
  flex
  flex-row
  z-50
  items-center
  `}
`;
const NavItem = styled.div`
  ${tw` 
    md:text-lg
    m-2
    md:m-4
    font-bold
    text-base
    self-center
    z-50
    `}
  span {
    padding-bottom: 5px;
    cursor: pointer;
  }
  .active,
  span:hover {
    background-image: linear-gradient(to right, #dea23b 0%, #dea23b 100%);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 4px;
  }
`;
const DropdownNavItem = styled(NavItem)`
  ${tw`  
  relative
  cursor-pointer
  z-50
  `}
  span:focus {
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
const SubNavContainer = styled.div`
  border-radius: 3px;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw` 
    w-max
    py-5
    px-5
    bg-white
    absolute
    top-10
    z-50
  `}
`;
const SubNavItem = styled.div`
  ${tw`py-3 z-50`}
`;
