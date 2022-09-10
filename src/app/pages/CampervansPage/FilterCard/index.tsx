import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../../ui/atoms/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import FilterBox from "../../../ui/molecules/FilterBox";
import Calendar from "../../../ui/molecules/Calendar";

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
`

const FilterCard = () => {
  return (
    <FilterContainer>
      <FilterItems>
        <FilterBox
          text={"Location"}
          optionCollection={["Melbourne", "Adelaide", "Sydney"]}
        />

        <Calendar />

        <FilterBox
          text={"Guests"}
          optionCollection={[
            "Adult 1",
            "Adult 2",
            "Adult 3",
            "Adult 4",
            "Adult 5",
            "Adult 6",
          ]}
        />

        <FilterBox
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
        />
      </FilterItems>
    </FilterContainer>
  );
};

export default FilterCard;
