import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../atoms/Button";

interface IFilterBox {
  text: string | number;
  optionCollection: string[];
  className?: string;
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
  mx-4 my-4
  
  `}
`

const FilterBox = ({ text, optionCollection, className}: IFilterBox) => {
  const [selectedValue, setSelectedValue] = useState();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handle = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, []);



  return (
    <ItemContainer ref={menuRef} className={className}>
      <Button
        onClick={() => {
          setIsFilterOpen(!isFilterOpen);
        } }
        theme="filter" text={''}  
      >
        { selectedValue ? selectedValue : text}
       
      </Button>
      {isFilterOpen && (
        <DropdownBox>
          {optionCollection.map((option: string, index: number) => (
            <StyleOption
              onClick={(e: any) => {
                setSelectedValue(e.target.value)
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
