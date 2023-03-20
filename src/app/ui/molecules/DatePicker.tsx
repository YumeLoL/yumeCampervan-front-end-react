import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { format, differenceInDays } from "date-fns";
import useClickClose from "../../hooks/useClickClose";
import Button from "../atoms/Button";
import { getBookedDates } from "../../httpService/api/bookingApi";
import { useParams } from "react-router-dom";


const DatePicker = ({ setDaysSelected }: { setDaysSelected: any }) => {
    const vanId = Number(useParams().vanId);
    const { menuRef, isOpen, setIsOpen } = useClickClose()

    const [bookedDates, setBookedDates] = useState([]);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    // Calculate the number of days selected
    setDaysSelected(differenceInDays(date[0].endDate, date[0].startDate) + 1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getBookedDates(vanId);
                if (res.data.code === 1) {
                    const bookedDates = res.data.data.map((date: Date) => new Date(date))
                    setBookedDates(bookedDates)
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
                    disabledDates={bookedDates}
                    dateDisplayFormat="dd MMM yyyy"

                    ranges={date}
                    minDate={new Date()}

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