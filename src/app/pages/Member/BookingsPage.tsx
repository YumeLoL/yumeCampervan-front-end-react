import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../ui/atoms/Button";

import Title from '../../ui/atoms/Title';
import Text from '../../ui/atoms/Text';
import Layout from '../../ui/organisms/Layout'
import { getAllBookingsByMemberId } from "../../httpService/api/bookingApi";
import { BookingSections, BookingStatus } from "../../libs/constant";


export const BookingsPage = () => {
  // To retrieve the memberId:
  const memberId = JSON.parse(localStorage.getItem("yumeCamp_member") ?? "null").memberId;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(BookingSections.REQUEST);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllBookingsByMemberId(memberId, { bookingStatus: BookingStatus.PENDING });
        if (res.data.code === 1) {
          setBookings(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])


  const renderedBookingSection = Object.values(BookingSections).map((item) => {
    return <Button theme={'text'} text={item} className={`py-2 px-4 focus:outline-none ${activeTab === item ? "bg-gray-200" : ""
      }`} onClick={() => setActiveTab(item)} key={item} />
  })

  const renderedBookingDetails = bookings.map(booking => (
    <ContentWrap key={booking.bookingId}>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Campervan: xxx</h3>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">Booking Request ID:</p>
          <p className="text-sm text-gray-900">{booking.bookingId}</p>
        </div>
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
    </ContentWrap>
  ))

  return (
    <Layout>
      <BookingContainer>
        <Title title={"Bookings"} size={'large'} className={'block text-left'} />

        <BookingItems>{renderedBookingSection}</BookingItems>

        <BookingDetails>
          {activeTab === BookingSections.REQUEST && (
            <DetailBlock>
              {
                bookings.length > 0 ? <DetailCard> {renderedBookingDetails}</DetailCard>
                  : <p className="text-center text-gray-500">You have no requests yet.</p>
              }

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`} />
                <Text text={" for a new one?"} />
              </div>
            </DetailBlock>
          )}
        </BookingDetails>
      </BookingContainer>

    </Layout>

  )
}


const BookingContainer = styled.section`
  ${tw`
    w-full
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