import { differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import { BookingQuote } from '../components/RequestBox/BookingQuote';
import { DatePicker } from '../components/RequestBox/DatePicker';

import logo from "../libs/img/logo.png";
import { DateRangeType } from '../libs/interface/common';
import Button from '../ui/atoms/Button';
import Title from '../ui/atoms/Title';


export const RequestPage = () => {
  const location = useLocation()
  if (!location.state || !location.state.requestParams) {
    return null // Or return a fallback component
  }
  const { price, date, vanId } = location.state.requestParams;
  const [resetDate, setResetDate] = useState<DateRangeType[]>([
    {
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      key: "selection"
    }
  ]);
  const diffDays = differenceInDays(resetDate[0].endDate, resetDate[0].startDate) + 1

  const [berths, setBerths] = useState<number>(0);
  const [daysSelected, setDaysSelected] = useState(0);



  return (
    <AppContainer>
      <PageContainer>
        <MainNavContainer>
          <NavbarContainer>
            <LogoContainer>
              <LogoContainer>
                <Image>
                  <img src={logo} alt="logo" />
                </Image>
                <TextLogo>YUME.Camp</TextLogo>
              </LogoContainer>
            </LogoContainer>
          </NavbarContainer>
        </MainNavContainer>

        <div className={`w-full flex my-8 p-8`}>
          <div className={`w-[350px]`}>
            <Title title={'Request to book'} size={'large'} />

            {/* <Booking /> */}
            <Title title={'When are you going?'} size={'small'} />

            {/* DatePicker if require to change dates */}
            <DatePicker vanId={vanId} date={resetDate} setDate={setResetDate} />

            {/* guests(berths) number selector */}
            <Title title={'How many you going?'} size={'small'} />
            <ItemContainer>
              <Button theme="filter" text="" className={`w-full flex justify-between items-center my-7`}>
                                {`Guests `}
                                <div className={`flex items-center `}>
                                    <span
                                        onClick={() => setBerths(berths > 1 ? berths - 1 : 1)}
                                        className={`px-2 mx-2 text-3xl`}
                                    >-</span>
                                    {` ${berths} `}
                                    <span
                                        onClick={() => setBerths(berths < 6 ? berths + 1 : 6)}
                                        className={`px-2 mx-2 text-3xl`}
                                    >+</span>
                                </div>
                            </Button>
            </ItemContainer>

            <hr className={`mb-8`} />

            <Title title={'Cancellations'} size={'medium'} />
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>

            <hr />
          </div>

          <div className={`w-auto`}>
          <BookingQuote price={price} diffDays={diffDays}/>
          </div>
        </div>

      </PageContainer>
    </AppContainer>

  )
}

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-screen
    h-full
  `}
`;
// Use Twin’s tw import to create and style new components with Tailwind classes
const PageContainer = styled.div`
  ${tw` 
    flex
    flex-col
    w-screen
    h-auto
    items-center
    `}
`;

const MainNavContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    z-50
    `}
`;
const NavbarContainer = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    min-h-0
    h-20
    px-4
    lg:px-8
    flex
    justify-between
    z-50
    `}
`;

const LogoContainer = styled.div`
  ${tw` flex items-center`}
`;

const Image = styled.div`
  ${tw` h-8 md:h-12 items-center `}
  img {
    width: auto;
    height: 100%;
  }
`;
const TextLogo = styled.div`
  ${tw`  hidden sm:contents sm:text-lg md:text-xl font-bold m-2`}
`;

const ItemContainer = styled.div`
  ${tw`
  w-full
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;

