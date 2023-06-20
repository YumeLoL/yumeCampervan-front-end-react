import styled from "styled-components";
import tw from "twin.macro";

const CarouselContainer = styled.div`
  ${tw`
    w-full
    h-[450px]
    my-8
    overflow-hidden
    // relative
    `}
`;
const VanProfileContainer = styled.div`
  ${tw`
    h-auto
    w-full
    p-24
    flex
    justify-between
    `}
`;

const VanDetailContainer = styled.div`
  ${tw`
  w-2/3
  `}
`;

const VanBookingContainer = styled.div`
  ${tw`
    w-[300px]
    flex
    justify-end
  `}
`;

const VanTitleAvatar = styled.div`
  ${tw`
    w-full
    flex
    justify-between
    `}
`;
const Avatar = styled.div`
  ${tw`
    flex
    flex-col
    align-middle
    justify-center
    `}
`;
const AvatarIcon = styled.div`
  ${tw` 
    w-24
    h-24
    text-secondary
    text-6xl
    text-center
    flex
    items-center
    justify-center
    rounded-full
    border-4
    border-secondary
    `}
`;
const InfoSession = styled.div`
  ${tw`
  flex
  w-full
  mb-4
  text-xl
   `}
  strong {
    margin-right: 2rem;
  }
`;
const FeaturedList = styled.div`
  ${tw` `}
`;

export {
  CarouselContainer,
  VanProfileContainer,
  VanDetailContainer,
  VanBookingContainer,
  VanTitleAvatar,
  Avatar,
  AvatarIcon,
  InfoSession,
  FeaturedList,
};
