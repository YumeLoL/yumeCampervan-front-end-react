import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../../atoms/Marginer";
import Button from "../../atoms/Button";
import { SCREENS } from "../../../libs/responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-3xl
    lg:w-2/3
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    px-3
    py-2
    md:px-5
    md:py-4
    mx-4
    my-6
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative items-baseline`};
`;

const Icon = styled.span`
  ${tw`
    text-primary
    fill-current
    text-lg
    md:text-xl
    mr-1
    md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-base
    cursor-pointer
    select-none
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `};
`;
const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  width: 300px;
  top: 4em;
  left: -0.5em;
  user-select: none;

  ${({ offset }:any) =>
    {
    return offset &&
      css`
      left: -5.5em;
    `;
  }};

  @media (min-width: ${SCREENS.sm}) {
    top: 5em;
    left: -1em;
  }
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  // console.log("startDate:", startDate)
  // console.log("returnDate:", returnDate)

  const handleStartCalender = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const handleReturnCalender = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleStartCalender}>Pick Up</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>

        {isStartCalendarOpen && (
          <DateCalendar onChange={setStartDate} value={startDate} />
        )}
      </ItemContainer>

      <LineSeperator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleReturnCalender}>Return</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>

        {isReturnCalendarOpen && (
          <DateCalendar offset onChange={setReturnDate} value={returnDate} />
        )}
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />
      <Button
        className="bg-primary
        hover:bg-transparent
        hover:text-primary
        hover:border-primary"
        text="Book Your Ride"
        theme={"base"}
      />
    </CardContainer>
  );
};

export default BookCard
