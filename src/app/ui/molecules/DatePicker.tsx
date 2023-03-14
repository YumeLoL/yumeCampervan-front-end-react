import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import useClickClose from "../../hooks/useClickClose";
import Button from "../atoms/Button";




const DatePicker = () => {
    const { menuRef, isOpen, setIsOpen } = useClickClose()
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    return (
        <ItemContainer ref={menuRef} className="duration">
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
                    ranges={date}
                    className="absolute top-12 left-0"
                />
            )}
        </ItemContainer>
    );
};

export default DatePicker;

const ItemContainer = styled.div`
  ${tw`
  w-full
  flex 
  relative 
  items-baseline
  mr-5
  my-6  
  justify-between
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
`