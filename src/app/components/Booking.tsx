import React, { useState } from 'react'
import styled from "styled-components";
import tw from "twin.macro";

import Button from '../ui/atoms/Button';
import Text from "../ui/atoms/Text";
import DatePicker from '../ui/molecules/DatePicker';


export const Booking = ({ price }: any) => {
    


    return (
        <BookingWrapper>
            <StyledForm >
                <div style={{ width: '100%', display: "flex", placeItems: "baseline" }}>
                    <span>From</span>
                    <strong style={{ fontSize: "40px", padding: "10px" }}>${price}</strong>
                    <span>AUD per day</span>
                </div>
                <div style={{ width: '100%' }}>
                    <DatePicker />
                    <StyledButton theme='outlined' text="Request to book" />
                </div>
                <strong style={{ width: '100%', textAlign: "center" }}>You won't be charged yet.</strong>
            </StyledForm>
        </BookingWrapper>
    )
}


const BookingWrapper = styled.div`
  ${tw`
  top-0
   w-[380px]
  `}
`;

const StyledForm = styled.div`
${tw`
   w-[380px]
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