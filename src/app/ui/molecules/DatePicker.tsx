import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { format, differenceInDays, parseISO, addDays } from "date-fns";
import useClickClose from "../../hooks/useClickClose";
import Button from "../atoms/Button";
import { useParams } from "react-router-dom";
import { getDisabledDates } from "../../httpService/api/bookingApi";



const DatePicker = () => {
    const vanId = Number(useParams().vanId);
    const { menuRef, isOpen, setIsOpen } = useClickClose()

    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    // get disabled dates
   useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDisabledDates(vanId);
                if (res.data.code === 1) {
                    const dateArray = res.data.data.map((date:string) => new Date(date));
                    setDisabledDates(dateArray)
                }
            } catch (error) {
                console.error("Request error:", error);
            }
        }
        fetchData();
   }, [])


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
                    disabledDates={disabledDates}
                    dateDisplayFormat="dd MMM yyyy"
                    ranges={date}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 150)}
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