import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";

const Container = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;

const StepsContainer = styled.div`
  ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-16
      lg:mt-24
    `};
`;

const StepContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-gray-500
      m-3
      px-8
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    w-28
    h-28
    md:w-40
    md:h-40
    flex
    rounded-lg
    items-center
    justify-center
    p-2
    `};
`;

const StepTitle = styled.h4`
  ${tw`
      text-black
      text-lg
      md:text-2xl
      font-semibold
      my-4
    `};
`;

const StepIcon = styled.span`
  ${tw`
      text-secondary
      text-6xl
    `};
`;

const BookingStep = () => {
  return (
    <Container>
      <Title title="Our Booking Steps" size={"large"} />
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <Text text=" Find the nearest Yourcar point and book your car. Lorem ipsum dolor sit amet." />
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <Text text="Pickup the Best Date to rent a car for you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid." />
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <Text text=" Book your nice car with ease in one single click. Lorem ipsum dolor sit amet." />
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingStep;
