import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Button from "../../../ui/atoms/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const FilterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    flex
    justify-start
    px-2 py-2
    border-t-[1px]
    border-b-[1px]
    border-gray-300
  `}
`;
const FilterItems = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    h-auto
    m-auto
    flex
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
  text-gray-700
  border-gray-300 
  border-2 
  rounded-md
  px-6
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
  const [vanType, setVanType] = useState();
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
    <FilterContainer>
      <FilterItems>
        {/* <ItemContainer>
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
        </ItemContainer> */}

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

        {/* <ItemContainer>
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
        </ItemContainer> */}

        <ItemContainer ref={menuRef}>
          <Button
            onClick={(e: any) => {
              setIsFilterOpen(!isFilterOpen);
            }}
            theme="filter"
            text={""}
          >
            {vanType ? vanType : "Van Type"}
          </Button>
          {isFilterOpen && (
            <DropdownBox>
              <option
                onClick={(e: any) => {
                  setVanType(e.target.value);
                }}
                value="pop-top"
              >
                Pop Top
              </option>
              <option
                onClick={(e: any) => {
                  setVanType(e.target.value);
                }}
                value="trailer"
              >
                Trailer
              </option>
              <option
                onClick={(e: any) => {
                  setVanType(e.target.value);
                }}
                value="campervan"
              >
                Campervan
              </option>
              <option
                onClick={(e: any) => {
                  setVanType(e.target.value);
                }}
                value="motorhome"
              >
                Motorhome
              </option>
              <option
                onClick={(e: any) => {
                  setVanType(e.target.value);
                }}
                value="caravan"
              >
                Caravan
              </option>
            </DropdownBox>
          )}
        </ItemContainer>

        <Button
          className="text-primary"
          text={"Search vans"}
          theme={"outlined"}
          onClick={onclick}
        />
      </FilterItems>
    </FilterContainer>
  );
};

export default FilterCard;
