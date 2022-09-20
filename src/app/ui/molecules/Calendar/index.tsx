import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Button from "../../atoms/Button";
import useMenuRef from "../../../hooks/useMenuRef";

const ItemContainer = styled.div`
  ${tw`
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;

const Calendar = ({date, setDate}: any) => {
  const {menuRef, isOpen, setIsOpen} = useMenuRef()

  return (
    <ItemContainer ref={menuRef} className="duration">
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        theme="filter"
        text={""}
      >
        { `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}
      </Button>

      {isOpen && (
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
