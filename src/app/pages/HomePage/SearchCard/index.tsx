import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { faCalendarAlt, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Marginer } from "../../../ui/atoms/Marginer";
import Button from "../../../ui/atoms/Button";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    max-w-5xl
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

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `};
`;

const SearchCard = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [location, setLocation] = useState("melbourne");
  const [sleep, setSleep] = useState("2");


  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <select
          id="location"
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="melbourne">Melbourne</option>
          <option value="adelaide">Adelaide</option>
          <option value="sydney">Sydney</option>
        </select>
      </ItemContainer>

      <LineSeperator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <span onClick={() => 
        {setIsCalendarOpen(!isCalendarOpen)
         
        }}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        {isCalendarOpen && (
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

      <LineSeperator />

      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faBed} />
        </Icon>
        <select
          id="sleep"
          name="sleep"
          value= "2"
          onChange={(e) => setSleep(e.target.value)}
        >
          <option value="1">Adult 1</option>
          <option value="2">Adult 2</option>
          <option value="3">Adult 3</option>
          <option value="4">Adult 4</option>
          <option value="5">Adult 5</option>
          <option value="6">Adult 6</option>
        </select>
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />
      <Button
        className="bg-primary
        hover:bg-transparent
        hover:text-primary
        hover:border-primary"
        text="Search Vans"
        theme={"base"}
        onClick={() => navigate("/campervans", { state:{ location, date, sleep}})}
      />
    </CardContainer>
  );
};

export default SearchCard;
