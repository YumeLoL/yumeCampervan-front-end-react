import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface TextType {
  text: string;
  className?: string;
}

const TextStyle = styled.p`
  ${tw`
  text-sm
  md:text-lg
  lg:text-xl
  xl:text-2xl
  sm:max-h-full
  text-gray-800
  mb-4
  md:mb-10
  `}
`;

const Text = ({ text, className }: TextType) => {
  return <TextStyle className={className}>{text}</TextStyle>;
};

export default Text;
