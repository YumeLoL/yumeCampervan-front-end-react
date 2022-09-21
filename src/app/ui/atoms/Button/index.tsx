import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface ButtonType {
  theme: "filled" | "outlined" | "text" | "base" | "filter";
  className?: string;
  text: string;
  value?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  // onClick?: any;
}

const BaseButton = styled.button`
  ${tw`
    px-1
    py-1.5
    sm:px-4
    sm:py-2
    outline-none
    rounded-md
    text-white
    text-sm
    md:text-base
    lg:text-lg
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    z-40
    `};
`;
const OutlinedButton = styled(BaseButton)`
  ${tw`
  border-primary
  text-primary
  bg-transparent
  hover:bg-primary
  hover:text-white
  hover:border-transparent
  mr-2
  sm:mr-8
  mb-4
`};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    bg-secondary
    hover:bg-transparent
    hover:text-secondary
    hover:border-secondary
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
    case "outlined":
      return (
        <OutlinedButton className={className} onClick={onClick}>
          {text}
        </OutlinedButton>
      );

    case "filled":
      return (
        <FilledButton className={className} onClick={onClick}>
          {text}
        </FilledButton>
      );

    case "text":
      return (
        <TextButton className={className} onClick={onClick}>
          {text}
        </TextButton>
      );

    case "filter":
      return (
        <FilterButton
          className={className}
          onClick={onClick}
          value={text}
        >
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
