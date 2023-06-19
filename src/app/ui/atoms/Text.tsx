import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface TextType {
  text: string;
  className?: string;
  onClick?: (event: MouseEvent) => void;
}

const Text = ({ text, className }: TextType) => {
  return <TextStyle className={className}>{text}</TextStyle>;
};

export default Text;

const TextStyle = styled.p`
  ${tw`
  max-w-7xl
  text-sm
  md:text-base
  lg:text-lg
  xl:text-xl
  sm:max-h-full
  text-gray-800
  mb-4
  md:mb-10
  `}
`;
