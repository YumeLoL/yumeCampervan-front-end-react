import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";


interface ILayout {
  children: React.ReactNode;
}


const MainLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
    <AppContainer>
      <PageContainer>
      <Navbar />
      {children}
      <Footer />
      </PageContainer>
     </AppContainer>
    </>
  );
};

export default MainLayout;


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
    `}
`;