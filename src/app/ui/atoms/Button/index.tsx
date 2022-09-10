import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface ButtonType {
  className?: string;
  text: string;
  style?: React.CSSProperties;
  theme: "filled" | "outlined" | "text" | "base" | "filter";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  children?: React.ReactNode;
  value?: string;
}

const BaseButton = styled.button`
  ${tw`
    px-1
    py-1.5
    sm:px-5
    sm:py-3
    outline-none
    rounded-md
    text-white
    text-sm
    md:text-lg
    lg:text-xl
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    `};
`;
const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-primary
    hover:bg-transparent
    hover:text-primary
    hover:border-primary
    mr-2
    sm:mr-8
    mb-4
`};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-secondary
    text-secondary
    bg-transparent
    hover:bg-secondary
    hover:text-white
    hover:border-transparent
    mr-2
    sm:mr-8
    mb-4
  `};
`;

const TextButton = styled(BaseButton)`
  ${tw` 
  text-secondary
  p-0
  m-4
  `}
`;
const FilterButton = styled(BaseButton)`
  ${tw` 
    text-gray-700
    border-gray-300 
  `}
`;

const Button = ({ theme, text, className, onClick, children }: ButtonType) => {
  switch (theme) {
    case "filled":
      return (
        <FilledButton className={className} onClick={onClick}>
          {text}
        </FilledButton>
      );

    case "outlined":
      return (
        <OutlinedButton className={className} onClick={onClick}>
          {text}
        </OutlinedButton>
      );

    case "text":
      return (
        <TextButton className={className} onClick={onClick}>
          {text}
        </TextButton>
      );

    case "filter":
      return (
        <FilterButton className={className} onClick={onClick} value={text}>
          {text}
          {children}
        </FilterButton>
      );

    default:
      return (
        <BaseButton className={className} onClick={onClick}>
          {text}
        </BaseButton>
      );
  }
};

export default Button;
