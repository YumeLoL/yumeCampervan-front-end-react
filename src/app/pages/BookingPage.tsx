import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../ui/atoms/Button";

import Title from '../ui/atoms/Title';
import Text from '../ui/atoms/Text';
import Layout from '../ui/organisms/Layout'
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

export const BookingPage = () => {
  // To retrieve the memberId:
  const memberData = JSON.parse(localStorage.getItem("yumeCamp_member") ?? "null");
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("requests");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <BookingContainer>
        <Title title={"Bookings"} size={'large'} className={'block text-left'} />

        <BookingItems>
          <Button theme={'text'} text={'Requests'} className={`py-2 px-4 m-0 focus:outline-none ${activeTab === "requests" ? "bg-gray-200" : ""
            }`} onClick={() => setActiveTab('requests')} />
          <Button theme={'text'} text={'Upcoming'} className={`py-2 px-4 focus:outline-none ${activeTab === "upcoming" ? "bg-gray-200" : ""
            }`} onClick={() => setActiveTab('upcoming')} />
          <Button theme={'text'} text={'History'} className={`py-2 px-4 focus:outline-none ${activeTab === "history" ? "bg-gray-200" : ""
            }`} onClick={() => setActiveTab('history')} />
          <Button theme={'text'} text={'Cancelled'} className={`py-2 px-4 focus:outline-none ${activeTab === "cancelled" ? "bg-gray-200" : ""
            }`} onClick={() => setActiveTab('cancelled')} />
        </BookingItems>

        <div>
          {activeTab === "requests" && (
            <div className="min-h-[200px] mb-4 p-4 border border-gray-300 rounded-lg flex flex-col relative">
              {/* Put content for requests section here */}
              requests

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`}/>
                <Text text={" for a new one?"} />
              </div>
            </div>
          )}
          {activeTab === "upcoming" && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              {/* Put content for upcoming section here */}
              upcoming

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no holidays coming up. Why not "} />
                <Text className={'cursor-pointer mx-2 font-bold'} onClick={() => navigate('/campervans')} text={`Search`}/>
                <Text text={" for a new one?"} />
              </div>
            </div>
          )}
          {activeTab === "history" && (
            <div className="mb-4 p-4 border border-gray-300 rounded-lg">
              {/* Put content for history section here */}
              history

              <div className={'flex absolute bottom-0'}>
                <Text text={"You have no past bookings."} />
              </div>
            </div>
          )}
          {activeTab === "cancelled" && (
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