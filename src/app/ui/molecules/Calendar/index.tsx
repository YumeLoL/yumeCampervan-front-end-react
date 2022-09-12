import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Button from "../../atoms/Button";

const ItemContainer = styled.div`
  ${tw`
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;

const Calendar = ({date, setDate}: any) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handle = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <ItemContainer ref={menuRef} className="duration">
      <Button
        onClick={() => {
          setIsCalendarOpen(!isCalendarOpen);
        }}
        theme="filter"
        text={""}
      >
        { `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}
      </Button>

      {isCalendarOpen && (
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => {
            setDate([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={ date }
          className="absolute top-12 left-0"
        />
      )}
    </ItemContainer>
  );
};

export default Calendar;
