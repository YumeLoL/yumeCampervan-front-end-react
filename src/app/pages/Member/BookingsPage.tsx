import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../ui/atoms/Button";

import Title from '../../ui/atoms/Title';
import Text from '../../ui/atoms/Text';
import Layout from '../../ui/organisms/Layout'
import { getAllBookings, getAllBookingsByMemberId, getDisabledDates } from "../../httpService/api/bookingApi";
import { getAllMembers } from "../../httpService/api/memberApi";
import { BookingSections, BookingStatus } from "../../libs/constant";

export const BookingsPage = () => {
  // To retrieve the memberId:
  const memberId = JSON.parse(localStorage.getItem("yumeCamp_member") ?? "null").memberId;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Requests");
  const [bookings, setBookings] = useState<any[]>([]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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

  return (
    <Layout>
      <BookingContainer>
        <Title title={"Bookings"} size={'large'} className={'block text-left'} />

        <BookingItems>{renderedBookingSection}</BookingItems>

        <div>
          {activeTab === BookingSections.REQUEST && (
            <div className="min-h-[200px] mb-4 p-4 border border-gray-300 rounded-lg flex flex-col relative">
              {/* Put content for requests section here */}
              <div>

              </div>

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`} />
                <Text text={" for a new one?"} />
              </div>
            </div>
          )}
          {activeTab === BookingSections.UPCOMING && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              {/* Put content for upcoming section here */}
              upcoming

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`} />
                <Text text={" for a new one?"} />
              </div>
            </div>
          )}
          {activeTab === BookingSections.HISTORY && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              {/* Put content for history section here */}
              history

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no past bookings."} />
              </div>
            </div>
          )}
          {activeTab === BookingSections.CANCELLED && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              {/* Put content for cancelled section here */}
              cancelled

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no cancelled bookings."} />
              </div>
            </div>
          )}
        </div>

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