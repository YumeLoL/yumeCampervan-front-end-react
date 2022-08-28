import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface TitleType {
  title: string;
}

const Heading = styled.h1`
  ${tw`
  text-black
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-normal
  mb-6
  `}
`;

const LargeTitle = ({ title }: TitleType) => {
  return <Heading>{title}</Heading>;
};

export default LargeTitle;
