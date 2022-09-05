import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface TitleType {
  title: string;
  className?: string;
}

const Heading = styled.h1`
  ${tw`
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-normal
  mb-6
  `}
`;

const LargeTitle = ({ title, className }: TitleType) => {
  return <Heading className={className}>{title}</Heading>;
};

export default LargeTitle;
