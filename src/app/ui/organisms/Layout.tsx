import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContainer>
      <PageContainer>
        <Navbar />
        {children}
        <Footer />
      </PageContainer>
    </AppContainer>
  );
};

export default Layout;

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-full
  `}
`;
// Use Twin’s tw import to create and style new components with Tailwind classes
const PageContainer = styled.div`
  ${tw` 
    flex
    flex-col
    w-screen
    h-auto
    items-center
    relative
    `}
`;
