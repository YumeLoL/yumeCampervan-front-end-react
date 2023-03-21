import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import { Booking } from '../components/Booking';

import logo from "../libs/img/logo.png";
import Button from '../ui/atoms/Button';
import Title from '../ui/atoms/Title';
import DatePicker from '../ui/molecules/DatePicker';


export const RequestPage = () => {
    const location = useLocation()
    if (!location.state || !location.state.requestData) {
        return null // Or return a fallback component
    }
    let requestData = location.state.requestData;
    console.log(requestData)

    const [daysSelected, setDaysSelected] = useState(requestData.daysSelected);
    const [berths, setBerths] = useState<number>(0);


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
                        <DatePicker setDaysSelected={setDaysSelected} />

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
                        <BookingQuote>
                            <div className="PriceBreakdown">
                                <PriceBreakdown>
                                    <div className="Text Text--inline">${requestData.price} x {daysSelected} days</div>
                                    <div className="Text Text--inline">${requestData.price * daysSelected}</div>
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
                                    <div className="Text Text--inline">${requestData.price * daysSelected + 30 + 60}</div>
                                </PriceBreakdown>
                            </div>
                        </BookingQuote>
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

const BookingQuote = styled.div`
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