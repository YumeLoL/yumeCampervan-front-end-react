import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../../atoms/Logo";
import NavItems from "./NavItems";


const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Logo />
        <div className="flex">
          <NavItems />
          <Link className="flex items-center text-primary font-bold text-xl ml-4" to="/login" >Login</Link>
        </div>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
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