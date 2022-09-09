import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const FilterContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    h-auto
    flex
    justify-start
    px-4
    py-4
    lg:(px-8 py-8)
  `}
`;
const ItemContainer = styled.div`
  ${tw`
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;
const FilterButton = styled.span`
  ${tw`
  relative
  text-2xl
  text-gray-600
  border-primary 
  border-[3px] 
  rounded-md
  px-4
  py-2
  `}
`;
const DropdownBox = styled.div`
  ${tw`
  w-[200px] 
  absolute 
  top-20 
  left-0
  border-primary 
  border-2 
  text-xl
  text-primary
  `}
`;

const FilterCard = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <FilterContainer>
      <ItemContainer>
        <FilterButton
          onClick={(e: any) => {
            console.log(e.target.value);
          }}
        >
          {" "}
          Location
          <DropdownBox>
            <option value="melbourne">Melbourne</option>
            <option value="adelaide">Adelaide</option>
            <option value="sydney">Sydney</option>
          </DropdownBox>
        </FilterButton>
      </ItemContainer>

      <ItemContainer>
        <FilterButton
          onClick={() => {
            setIsCalendarOpen(!isCalendarOpen);
          }}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </FilterButton>

        {isCalendarOpen && (
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => {
              setDate([item.selection]);
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-12 left-0"
          />
        )}
      </ItemContainer>

      <ItemContainer>
        <FilterButton
          onClick={(e: any) => {
            console.log(e.target.value);
          }}
        >
          Guests
          <DropdownBox>
            <option value="1">Adult 1</option>
            <option value="2">Adult 2</option>
            <option value="3">Adult 3</option>
            <option value="4">Adult 4</option>
            <option value="5">Adult 5</option>
            <option value="6">Adult 6</option>
          </DropdownBox>
        </FilterButton>
      </ItemContainer>
      
      <ItemContainer>
        <FilterButton
          onClick={(e: any) => {
            console.log(e.target.value);
          }}
        >
          Van type
          <DropdownBox>
            <option value="pop-top">Pop Top</option>
            <option value="trailer">Trailer</option>
            <option value="campervan">Campervan</option>
            <option value="motorhome">Motorhome</option>
            <option value="caravan">Caravan</option>
          </DropdownBox>
        </FilterButton>
      </ItemContainer>
    </FilterContainer>
  );
};

export default FilterCard;
