import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonType {
  className?: string;
  text: string;
  style?: React.CSSProperties;
  theme: "filled" | "outlined" | "text" | "base";
  // onClick: (event: MouseEvent) => void,
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

const Button = ({ theme, text, className, style }: ButtonType) => {
  switch (theme) {
    case "filled":
      return <FilledButton className={className}>{text}</FilledButton>;

    case "outlined":
      return <OutlinedButton className={className}>{text}</OutlinedButton>;

    case "text":
      return <TextButton className={className}>{text}</TextButton>;

    default:
      return <BaseButton className={className}>{text}</BaseButton>;
  }
};

export default Button;
