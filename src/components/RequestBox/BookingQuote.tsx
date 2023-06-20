import styled from "styled-components";
import tw from "twin.macro";

import React, { useEffect } from "react";

interface BookingQuoteProps {
  price: number;
  diffDays: number;
  onUpdateTotalFee: (newTotalFee: number) => void;
}

export const BookingQuote = ({
  price,
  diffDays,
  onUpdateTotalFee,
}: BookingQuoteProps) => {
  const serviceFee = 30;
  const insuranceFee = 60;
  const totalFee = price * diffDays + serviceFee + insuranceFee;

  useEffect(() => {
    // Call onUpdateTotalFee callback when the totalFee value change
    onUpdateTotalFee(totalFee);
  }, [totalFee]);

  return (
    <QuoteContainer>
      <div className="PriceBreakdown">
        <PriceBreakdown>
          <div className="Text Text--inline">
            ${price} x {diffDays} days
          </div>
          <div className="Text Text--inline">${price * diffDays}</div>
        </PriceBreakdown>
        <PriceBreakdown>
          <div className="Text Text--inline">Service fee (fixed)</div>
          <div className="Text Text--inline">${serviceFee}</div>
        </PriceBreakdown>
        <PriceBreakdown>
          <div className="Text Text--inline">Insurance (fixed)</div>
          <div className="Text Text--inline">${insuranceFee}</div>
        </PriceBreakdown>
        <hr className={"my-4"} />
        <PriceBreakdown>
          <div className="Text Text--inline">Total in AUD</div>
          <div className="Text Text--inline">${totalFee}</div>
        </PriceBreakdown>
      </div>
    </QuoteContainer>
  );
};

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
