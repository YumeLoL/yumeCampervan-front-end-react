import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface TitleType {
  title: string;
  className?: string;
  size: 'large' | 'medium';
}

const LargeHeading = styled.h1`
  ${tw`
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-normal
  mb-6
  `}
`;
const MediumHeading = styled.span`
  ${tw`
  text-2xl
  md:text-4xl
  font-medium
  md:leading-normal
  mb-4
  `}
`;

const Title = ({ title, className, size }: TitleType) => {
  switch (size) {
    case 'large':
      return <LargeHeading className={className}>{title}</LargeHeading>;
    case 'medium':
      return <MediumHeading className={className}>{title}</MediumHeading>;
  }
};

export default Title;
