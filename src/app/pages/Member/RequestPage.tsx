import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import { differenceInDays, format } from 'date-fns';

import { BookingQuote } from '../../components/RequestBox/BookingQuote';
import { DatePicker } from '../../components/RequestBox/DatePicker';
import { postBooking } from '../../httpService/api/bookingApi';
import logo from "../../libs/img/logo.png";
import { DateRangeType } from '../../libs/interface/common';
import Button from '../../ui/atoms/Button';
import Title from '../../ui/atoms/Title';


export const RequestPage = () => {
  const navigate = useNavigate()

  //const memberId = JSON.parse(localStorage.getItem('yumeCamp_member') as string)
  const member = JSON.parse(localStorage.getItem('yumeCamp_member') as string)
  let memberId = '';
  if(member && member.memberId) {
    memberId = member.memberId;
  }else{
    navigate('/login')
  }


  const location = useLocation()
  if (!location.state || !location.state.requestParams) {
    return null // Or return a fallback component
  }

  const { price, date, vanId } = location.state.requestParams;
  const [berths, setBerths] = useState<number>(0);

  const [resetDate, setResetDate] = useState<DateRangeType[]>([
    {
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      key: "selection"
    }
  ]);
  const diffDays = differenceInDays(resetDate[0].endDate, resetDate[0].startDate) + 1

  const [totalFee, setTotalFee] = useState<number>(0);
  const handleTotalFeeUpdate = (newTotalFee: number) => {
    setTotalFee(newTotalFee);
  }


  const handleRequest = async() => {
    const requestParams = {
      vanId,
      memberId,
      startDate: format(resetDate[0].startDate, 'yyyy-MM-dd'),
      endDate: format(resetDate[0].endDate, 'yyyy-MM-dd'),
      price: totalFee,
      guest: berths,
      bookingStatus: 'pending'
    }

    try {
      const res = await postBooking(requestParams);
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  }



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

        <RequestDetailContainer>
          <div className={'w-[600px] flex flex-col'} >
            <div className={`w-[350px]`}>
              <Title title={'Request to book'} size={'large'} />

              {/* DatePicker if require to change dates */}
              <Title title={'When are you going?'} size={'small'} />
              <DatePicker vanId={vanId} date={resetDate} setDate={setResetDate} />

              {/* Guests(berths) button selector */}
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
            </div>
            <hr className={`mb-8`} />

            <Title title={'Cancellations'} size={'medium'} />
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>
            <p>Cancel earlier than 10 days before the start of the booking and receive a full credit. Refunds available upon request (less any admin fees) and may take up to 30 days to process.</p>

            <hr className={`mb-16`} />

            <StyledButton
              theme='filled'
              text={'Request to book'}
              onClick={() => {
                handleRequest()
                navigate('/request/confirm')
              }}
            />
          </div>

          <div className={`w-[350px] border-solid border border-gray-300 rounded-[3px] p-4`}>
            <BookingQuote price={price} diffDays={diffDays} onUpdateTotalFee={handleTotalFeeUpdate}  />
          </div>


        </RequestDetailContainer>

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

const RequestDetailContainer = styled.div`
  ${tw`
  w-full flex justify-between my-8 p-8 
  `}
`;

const StyledButton = styled(Button)`
  ${tw`
  w-48
  h-[50px]
  `}
`;
