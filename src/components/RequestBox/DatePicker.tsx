import { addDays, format } from "date-fns";
import styled from "styled-components";
import tw from "twin.macro";

import React, { useEffect, useState } from "react";
// theme css file
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
// main style file
import "react-date-range/dist/theme/default.css";

import useClickClose from "../../hooks/useClickClose";
import { getDisabledDates } from "../../httpService/api/bookingApi";
import { DateRangeType } from "../../libs/interface/common";
import Button from "../../ui/atoms/Button";

interface DatePickerProps {
  vanId: string;
  date: DateRangeType[];
  setDate: (date: DateRangeType[]) => void;
}

export const DatePicker = ({ vanId, date, setDate }: DatePickerProps) => {
  const { menuRef, isOpen, setIsOpen } = useClickClose();
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  // get disabled dates
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDisabledDates(vanId);
        if (res.data.code === 1) {
          const dateArray = res.data.data.map((date: string) => new Date(date));
          setDisabledDates(dateArray);
          console.log("disabledDates:", dateArray);
        }
      } catch (error) {
        console.error("Request error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <DatePickerContainer ref={menuRef} className="duration">
      <StyledDatePicker
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        theme="filter"
        text={""}
      >
        {`${format(date[0].startDate, "MM/dd/yyyy")}`}
      </StyledDatePicker>
      <StyledDatePicker
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        theme="filter"
        text={""}
      >
        {`${format(date[0].endDate, "MM/dd/yyyy")}`}
      </StyledDatePicker>

      {isOpen && (
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => {
            setDate([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          disabledDates={disabledDates}
          dateDisplayFormat="dd MMM yyyy"
          ranges={date}
          minDate={new Date()}
          maxDate={addDays(new Date(), 150)}
          className="absolute top-12 left-0"
        />
      )}
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  ${tw`
  w-full
  flex 
  relative 
  items-baseline
  mr-5
  my-6  
  justify-between
  z-50
  `}
`;

const StyledDatePicker = styled(Button)`
  ${tw`
w-[160px]
flex 
justify-center
border
border-gray-300
`}
`;
