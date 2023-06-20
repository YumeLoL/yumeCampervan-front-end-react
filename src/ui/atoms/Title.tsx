import styled from "styled-components";
import tw from "twin.macro";

import React from "react";

export interface TitleType {
  title: string | undefined;
  className?: string;
  size: "large" | "medium" | "small";
}

const Title = ({ title, className, size }: TitleType) => {
  switch (size) {
    case "large":
      return <LargeHeading className={className}>{title}</LargeHeading>;
    case "medium":
      return <MediumHeading className={className}>{title}</MediumHeading>;
    case "small":
      return <SmallHeading className={className}>{title}</SmallHeading>;
  }
};

export default Title;

const LargeHeading = styled.h1`
  ${tw`
  text-2xl
  md:text-4xl
  font-extrabold
  md:font-black
  md:leading-normal
  mb-6
  `}
`;
const MediumHeading = styled.span`
  ${tw`
  text-xl
  md:text-3xl
  font-medium
  md:leading-normal
  mb-4
  `}
`;
const SmallHeading = styled.span`
  ${tw`
  text-base
  md:text-xl
  font-medium
  md:leading-normal
  mb-2
  `}
`;
