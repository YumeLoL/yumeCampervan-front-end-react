import { addDays, differenceInDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";

import useClickClose from '../hooks/useClickClose';
import Button from '../ui/atoms/Button';
import DatePicker from '../ui/molecules/DatePicker';
import { getDisabledDates } from '../httpService/api/bookingApi';


export const RequestBox = ({ price, vanId }: any) => {
    const navigate = useNavigate()
    const { menuRef, isOpen, setIsOpen } = useClickClose()
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const diffDays = differenceInDays(date[0].endDate, date[0].startDate) + 1
    const requestData = { diffDays,price }


    // get disabled dates
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getDisabledDates(vanId);
                if (res.data.code === 1) {
                    const dateArray = res.data.data.map((date: string) => new Date(date));
                    setDisabledDates(dateArray)
                }
            } catch (error) {
                console.error("Request error:", error);
            }
        }
        fetchData();
    }, [])


    return (
        <BookingWrapper>
            <StyledForm >
                <div style={{ width: '100%', display: "flex", placeItems: "baseline" }}>
                    <span>From</span>
                    <strong style={{ fontSize: "40px", padding: "10px" }}>${price}</strong>
                    <span>AUD per day</span>
                </div>

                {/* Date Picker */}
                <div style={{ width: '100%' }}>
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

                    <StyledButton
                        theme='outlined'
                        text={'Request to book'}
                        onClick={() => navigate(`/member/${vanId}/request`, { state: { requestData } })}
                    />
                </div>

                <strong style={{ width: '100%', textAlign: "center" }}>You won't be charged yet.</strong>

                {
                    diffDays > 1 && (
                        <BookingQuote>
                        <div className="PriceBreakdown">
                            <PriceBreakdown>
                                <div className="Text Text--inline">${price} x {diffDays} days</div>
                                <div className="Text Text--inline">${price * diffDays}</div>
                            </PriceBreakdown>
                            <PriceBreakdown>
                                <div className="Text Text--inline">Service fee (fixed)</div>
                                <div className="Text Text--inline">$30.00</div>
                            </PriceBreakdown>
                            <PriceBreakdown>
                                <div className="Text Text--inline">Insurance (fixed)</div>
                                <div className="Text Text--inline">$60.00</div>
                            </PriceBreakdown>
                            <hr className={'my-4'} />
                            <PriceBreakdown>
                                <div className="Text Text--inline">Total in AUD</div>
                                <div className="Text Text--inline">${price * diffDays + 30 + 60}</div>
                            </PriceBreakdown>
                        </div>
                    </BookingQuote>
                    )
                }
               
            </StyledForm>
        </BookingWrapper>
    )
}


const BookingWrapper = styled.div`
  ${tw`
   w-[380px]
  `}
`;

const StyledForm = styled.div`
${tw`
   w-full
   border-solid
   border
   border-gray-300
   rounded-[3px]
   p-4
   flex
   flex-col
   justify-center
   items-center
  `}
`
const StyledButton = styled(Button)`
  ${tw`
  w-full
  h-[50px]
  `}
`;


const BookingQuote = styled.div`
  ${tw`
    w-full
    mt-4
    p-2
  `}
`;
const PriceBreakdown = styled.div`
  ${tw`
    w-full
    flex
    justify-between
  `}
`;

const DatePickerContainer = styled.div`
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