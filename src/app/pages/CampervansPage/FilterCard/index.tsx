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
        <select
          className='px-2 py-2 border-primary border-2'
          id="location"
          name="location"
          // onChange={(e) => setLocation(e.target.value)}
        >
          <option  value="melbourne">Melbourne</option>
          <option value="adelaide">Adelaide</option>
          <option value="sydney">Sydney</option>
     
        </select>
      </ItemContainer>
      <ItemContainer>
        <span
          onClick={() => {
            setIsCalendarOpen(!isCalendarOpen);
          }}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

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
      <select
          id="sleep"
          name="sleep"
          value= "2"
          // onChange={(e) => setSleep(e.target.value)}
        >
          <option value="1">Adult 1</option>
          <option value="2">Adult 2</option>
          <option value="3">Adult 3</option>
          <option value="4">Adult 4</option>
          <option value="5">Adult 5</option>
          <option value="6">Adult 6</option>
        </select>
      </ItemContainer>
      <ItemContainer>
        <select
          id="location"
          name="location"
          // onChange={(e) => setLocation(e.target.value)}
        >
          <option value="pop-top">Pop Top</option>
          <option value="trailer">Trailer</option>
          <option value="campervan">Campervan</option>
          <option value="motorhome">Motorhome</option>
          <option value="caravan">Caravan</option>
        </select>
      </ItemContainer>
    </FilterContainer>
  );
};

export default FilterCard;
