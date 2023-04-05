import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../ui/atoms/Button";

import Title from '../../ui/atoms/Title';
import Text from '../../ui/atoms/Text';
import Layout from '../../ui/organisms/Layout'
import { getAllBookingsByMemberId } from "../../httpService/api/bookingApi";
import { RequestStatus } from "../../libs/constant";
import { Marginer } from "../../ui/atoms/Margin";


export const BookingsPage = () => {
  // To retrieve the memberId:
  const memberId = JSON.parse(localStorage.getItem("yumeCamp_member") ?? "null").memberId;
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>(RequestStatus.PENDING);
  const [bookingStatus, setBookingStatus] = useState<string>(RequestStatus.PENDING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllBookingsByMemberId(memberId, { bookingStatus: bookingStatus });
        if (res.data.code === 1) {
          console.log(res.data.data);
          setBookings(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [activeTab])


  const renderedBookingSection = Object.values(RequestStatus).map((item) => {
    return <Button
      theme={'text'}
      text={item.toUpperCase()}
      className={`py-2 px-2 focus:outline-none ${activeTab === item ? "bg-gray-200" : ""
        }`}
      onClick={() => {
        setActiveTab(item)
        setBookingStatus(item.toLowerCase())
      }}
      key={item} />
  })

  const renderedBookingDetails = bookings.map(booking => (
    <ContentWrap key={booking.bookingId}>
      <div className="flex justify-between px-4 py-5 sm:p-6">
        <div className={'w-2/3 flex flex-col justify-between'}>
          <div className="w-full flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Campervan: {booking.vanName}</h3>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Booking Request ID:</p>
            <p className="text-sm text-gray-900">{booking.bookingId}</p>
          </div>
          <div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Booking Status:</p>
              <p className="text-sm text-gray-900">{booking.bookingStatus}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Guests:</p>
              <p className="text-sm text-gray-900">{booking.guest}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Booking Date:</p>
              <p className="text-sm text-gray-900">{booking.startDate} to {booking.endDate}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Total Price:</p>
              <p className="text-sm text-gray-900">${booking.price}</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 ml-4">
          <div className="w-34 h-44 bg-cover bg-center" style={{ backgroundImage: `url(${booking.imgUrl})` }}></div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Van Type:</p>
            <p className="text-sm text-gray-900">${booking.vanTypeName}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Pickup Location:</p>
            <p className="text-sm text-gray-900">${booking.vanLocation}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Price Per Day:</p>
            <p className="text-sm text-gray-900">${booking.vanPricePerDay}</p>
          </div>
        </div>
      </div>
    </ContentWrap>

  ))

  const renderBookingDetails = () => (
    <>
      {bookings.length > 0 ? (
        <DetailCard>{renderedBookingDetails}</DetailCard>
      ) : (
        <p className="text-center text-gray-500">You have no requests yet.</p>
      )}
    </>
  );

  return (
    <Layout>
      <BookingContainer>
        <Title title={"Bookings"} size={'large'} className={'block text-left'} />

        <BookingItems>{renderedBookingSection}</BookingItems>

        <BookingDetails>
          {activeTab === RequestStatus.PENDING && (
            <DetailBlock>
              {renderBookingDetails()}
              <Marginer direction="vertical" margin="5em" />
              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`} />
                <Text text={" for a new one?"} />
              </div>
            </DetailBlock>
          )}

          {activeTab === RequestStatus.CONFIRMED && (
            <DetailBlock>
              {renderBookingDetails()}
            </DetailBlock>
          )}
          {activeTab === RequestStatus.COMPLETED && (
            <DetailBlock>
              {renderBookingDetails()}
            </DetailBlock>
          )}
          {activeTab === RequestStatus.CANCELLED && (
            <DetailBlock>
              {renderBookingDetails()}
            </DetailBlock>
          )}
        </BookingDetails>
      </BookingContainer>

    </Layout>

  )
}


const BookingContainer = styled.section`
  ${tw`
    w-[80%] mx-auto mt-8
    p-6
  `}
`
const BookingItems = styled.section`
  ${tw`
    w-full
  `}
`
const BookingDetails = styled.section`
  ${tw`
    min-h-[200px] mb-4 p-4 border border-gray-300 rounded-lg flex flex-col relative
  `}
`
const DetailBlock = styled.div`
  ${tw`
    bg-gray-50 py-6 px-4 sm:px-6 lg:px-8
  `}
`
const DetailCard = styled.div`
  ${tw`
    flex flex-col gap-8
  `}
`
const ContentWrap = styled.div`
  ${tw`
    bg-white rounded-lg shadow overflow-hidden
  `}
`