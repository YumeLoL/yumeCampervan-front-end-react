import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import useMenuRef from "../../../../hooks/useMenuRef";
import Button from "../../../atoms/Button";

interface Ix {
  price: { min: number; max: number };
  setPrice: any;
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
const PriceContainer = styled.div`
  ${tw` 
  font-semibold
  text-sm
  md:text-base
  lg:text-lg
  mx-4 my-4
  
  `}
`;
const RangeContainer = styled.div`
  ${tw` 
    flex
    border-[1px] border-solid border-gray-300 rounded-md
    
    `}
`;
const StyledInput = styled.input`
  ${tw` 
    focus:outline-none
    pl-2
    `}
`;

const PriceRange = ({ price, setPrice }: Ix) => {
  const { isOpen, setIsOpen, menuRef } = useMenuRef();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(500);

  return (
    <ItemContainer ref={menuRef}>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        theme="filter"
        text={""}
      >
        { `Min ${price.min} - Max ${price.max}`}
      </Button>

      {isOpen && (
        <DropdownBox>
          <PriceContainer>
            <div>
              <label htmlFor="minimum">
                <div>Minimum</div>
              </label>
            </div>

            <RangeContainer>
              <div>$</div>
              <StyledInput
                type="number"
                min="1"
                max="500"
                defaultValue={1}
                onChange={(e: any) => setMin(e.target.value)}
              />
            </RangeContainer>
          </PriceContainer>
          <PriceContainer>
            <div>
              <label htmlFor="minimum">
                <div>Maximum</div>
              </label>
            </div>
            <RangeContainer>
              <div>$</div>
              <StyledInput
                type="number"
                min="1"
                max="500"
                defaultValue={500}
                onChange={(e: any) => setMax(e.target.value)}
              />
            </RangeContainer>
          </PriceContainer>

          <Button
            text={"Apply"}
            theme={"text"}
            onClick={(e: any) => {
              setPrice({ min, max });
            }}
          />
        </DropdownBox>
      )}
    </ItemContainer>
  );
};

export default PriceRange;
