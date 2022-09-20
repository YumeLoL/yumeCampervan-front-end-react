import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import useMenuRef from "../../../hooks/useMenuRef";
import Button from "../../atoms/Button";

interface IFilterBox {
  text: string | number;
  optionCollection: string[];
  className?: string;
  selectedValue?: string;
  setSelectedValue?: any;
}

const ItemContainer = styled.div`
  ${tw`
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;
const DropdownBox = styled.div`
  ${tw`
  w-auto
  absolute 
  top-16
  left-0
  text-gray-700
  border-gray-300 
  bg-white
  border-2
  rounded-md
  text-xl
  z-10
  `}
`;
const StyleOption = styled.option`
  ${tw` 
  font-semibold
  text-sm
  md:text-base
  lg:text-lg
  mx-4 my-4
  `}
`;

const FilterBox = ({
  text,
  optionCollection,
  className,
  selectedValue,
  setSelectedValue,
}: IFilterBox) => {
  const {isOpen, setIsOpen, menuRef}= useMenuRef()

  return (
    <ItemContainer ref={menuRef} className={className}>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        theme="filter"
        text={""}
      >
        {selectedValue ? selectedValue : text}
      </Button>

      {isOpen && (
        <DropdownBox>
          {optionCollection.map((option: string, index: number) => (
            <StyleOption
              onClick={(e: any) => {
                setSelectedValue(e.target.value);
              }}
              key={index}
            >
              {option}
            </StyleOption>
          ))}
        </DropdownBox>
      )}
    </ItemContainer>
  );
};

export default FilterBox;
