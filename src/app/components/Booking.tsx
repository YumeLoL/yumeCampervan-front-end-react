import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";

import Button from '../ui/atoms/Button';
import DatePicker from '../ui/molecules/DatePicker';


export const Booking = ({ price, vanId }: any) => {
    const navigate = useNavigate()  
    const [bookedDates, setBookedDates] = useState([]);
    const [daysSelected, setDaysSelected] = useState(0);
    const requestData = { bookedDates,daysSelected, price }


    return (
        <BookingWrapper>
            <StyledForm >
                <div style={{ width: '100%', display: "flex", placeItems: "baseline" }}>
                    <span>From</span>
                    <strong style={{ fontSize: "40px", padding: "10px" }}>${price}</strong>
                    <span>AUD per day</span>
                </div>
                <div style={{ width: '100%' }}>
                    <DatePicker setDaysSelected={setDaysSelected} bookedDates={bookedDates} setBookedDates={setBookedDates} />
                    <StyledButton
                        theme='outlined'
                        text={'Request to book'}
                        onClick={() => navigate(`/member/${vanId}/request`, { state: { requestData } })}
                    />
                </div>

                <strong style={{ width: '100%', textAlign: "center" }}>You won't be charged yet.</strong>

                <BookingQuote>
                    <div className="PriceBreakdown">
                        <PriceBreakdown>
                            <div className="Text Text--inline">${price} x {daysSelected} days</div>
                            <div className="Text Text--inline">${price * daysSelected}</div>
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
                            <div className="Text Text--inline">${price * daysSelected + 30 + 60}</div>
                        </PriceBreakdown>
                    </div>
                </BookingQuote>
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