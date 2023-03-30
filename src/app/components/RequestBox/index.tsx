import { addDays, differenceInDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";

import Button from '../../ui/atoms/Button';
import { getDisabledDates } from '../../httpService/api/bookingApi';
import { DatePicker } from './DatePicker';
import { BookingQuote } from './BookingQuote';
import { DateRangeType } from '../../libs/interface/common';



export const RequestBox = ({ price, vanId }: { price: number, vanId: string }) => {
    const navigate = useNavigate()
    const [date, setDate] = useState<DateRangeType[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const diffDays = differenceInDays(date[0].endDate, date[0].startDate) + 1


    return (
        <BookingWrapper>
            <StyledForm >
                <div style={{ width: '100%', display: "flex", placeItems: "baseline" }}>
                    <span>From</span>
                    <strong style={{ fontSize: "40px", padding: "10px" }}>${price}</strong>
                    <span>AUD per day</span>
                </div>

                {/* Date Picker box*/}
                <div className={'w-full'} >
                    <DatePicker vanId={vanId} date={date} setDate={setDate} />
                    <StyledButton
                        theme='outlined'
                        text={'Request to book'}
                        onClick={() => {
                            const requestParams = {price, vanId, date }
                            navigate(`/member/${vanId}/request`, { state: { requestParams } })
                        }}
                    />
                </div>

                <strong style={{ width: '100%', textAlign: "center" }}>You won't be charged yet.</strong>

                {/* render if select dates, to show price detail */}
                {diffDays > 1 && <BookingQuote price={price} diffDays={diffDays} onUpdateTotalFee={()=>{}} />}

            </StyledForm>
        </BookingWrapper>
    )
}


const BookingWrapper = styled.div`
  ${tw`
   w-[380px]
   h-fit
   bg-white
   z-10
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




