import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";

export const BookingQuote = ({ price, diffDays }: { price: number, diffDays: number }) => {
  return (
    <QuoteContainer>
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
    </QuoteContainer>
  )
}

const QuoteContainer = styled.div`
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
