import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../../ui/atoms/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterBox from "../../../ui/molecules/FilterBox";
import Calendar from "../../../ui/molecules/Calendar";
import { useLocation } from "react-router-dom";

interface IStateData {
  location: string;
  date: any;
  sleep: number | string;
}

const FilterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    flex
    justify-start
    px-2 py-2
    border-t-[1px]
    border-b-[1px]
    border-gray-300
  `}
`;
const FilterItems = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    h-auto
    m-auto
    flex
    items-center
  `}
`;
const StyledButton = styled(Button)`
  ${tw`mb-0`}
`;

const FilterCard = () => {
  // const locationData = useLocation() as any;
const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // get selected filter value
  const handleFilter = () => {
    const location = (
      document.getElementsByClassName("location")[0] as HTMLElement
    ).innerText;
    const sleep = (document.getElementsByClassName("sleep")[0] as HTMLElement)
      .innerText;
    const type = (document.getElementsByClassName("type")[0] as HTMLElement)
      .innerText;
    const duration = (
      document.getElementsByClassName("duration")[0] as HTMLElement
    ).innerText;

    console.log(
      "location:" + location,
      "sleep:" + sleep,
      "type:" + type,
      "duration:" + duration
    );
  };

  return (
    <FilterContainer>
      <FilterItems>
        <FilterBox
          className="location"
          // text={location ? location : "location"}
          text={"Location"}
          optionCollection={["Melbourne", "Adelaide", "Sydney"]}
        />

        <Calendar
          date={date}
          setDate={setDate}
        />

        <FilterBox
          className="sleep"
          // text={sleep ? `Guests ${sleep}` : "Guests"}
          text={"Guests"}
          optionCollection={[
            "Guest 1",
            "Guests 2",
            "Guests 3",
            "Guests 4",
            "Guests 5",
            "Guests 6",
          ]}
        />

        <FilterBox
          className="type"
          text={"Van Type"}
          optionCollection={[
            "Pop top",
            "Trailer",
            "Campervan",
            "Motorhome",
            "Caravan",
          ]}
        />

        <StyledButton
          className=""
          text={"Search vans"}
          theme={"outlined"}
          onClick={handleFilter}
        />
      </FilterItems>
    </FilterContainer>
  );
};

export default FilterCard;
