import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Calendar } from "react-date-range";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { IVan } from "../../../libs/interface";
import Text from "../../../ui/atoms/Text";
import Title from "../../../ui/atoms/Title";
import MainLayout from "../../../ui/organisms/MainLayout";


const CarouselContainer = styled.div`
  ${tw`
    w-full
    `}
`;
const VanProfileContainer = styled.div`
  ${tw`
    max-w-[1200px]
    m-10
    flex
    gap-20
    `}
`;
const VanDetailContainer = styled.div`
  ${tw`
    
    `}
`;
const VanTitleAvatar = styled.div`
  ${tw`
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
    w-10
    h-10
    text-secondary
    text-2xl
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
const VanBookingContainer = styled.div`
  ${tw`

    `}
`;
const DatePicker = styled.div`
  ${tw`
  
  `}
`

const VanDetailPage = () => {
  const { id } = useParams();
  const [vanProfile, setVanProfile] = useState<IVan>()

  const [loading, setLoading] = useState(false);

  // date range picker
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // useEffect(() => {
  //   setLoading(true)

  //   try {
  //     const { vanProfile } = data

  //     const vanDetail = vanProfile.filter(van => van.id.toString() === id)

  //     setVanProfile(vanDetail[0])

  //   } catch (err) {
  //     console.log(err)
  //   }

  //   setLoading(false);
  // }, []);


  return (
    <MainLayout>
      {loading ? (
        "on loading ......"
      ) : (
        <>
          <CarouselContainer>
            {/* <Carousel
              offset={10}
              plugins={[
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    "infinite",
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                1536: {
                  plugins: [
                    "arrows",
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            >
              {vanProfile?.thumbnailSrc?.map((imgUrl: string, i: number) => (
                <img
                  key={i}
                  className="w-full h-[246px] object-cover"
                  src={imgUrl}
                  alt=""
                />
              ))}
            </Carousel> */}
          </CarouselContainer>

          <VanProfileContainer>
            <VanDetailContainer>
              <VanTitleAvatar>
                <Title
                  className="text-secondary flex items-center"
                  size={"medium"}
                  title={vanProfile?.name as string}
                />
                <Avatar>
                  <AvatarIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </AvatarIcon>
                  <span className="text-center font-bold text-lg">Ban</span>
                </Avatar>
              </VanTitleAvatar>

              <strong className="text-xl inline-block my-4">
                Location: {vanProfile?.location}
              </strong>

              <InfoSession>
                <strong>Guests: {vanProfile?.sleep}</strong>
                <strong>Tow</strong>
                <strong>Deliver</strong>
              </InfoSession>

              <Text
                text={`Pop-Top Trailer 17.56-1. Will comfortably sleep a
              family of up to 6, Quick and easy set-up with a pop-top roof, 2
            slide out beds (queen and double) and a roll out awning. Comforts of
            air-conditioning/heating and microwave (only with 240 volt power), 4
            burner cook-top and grill and large 3 way fridge with freezer.
            Pantry basics included. This van is also equipped with solar.`}
              />

              <FeaturedList></FeaturedList>
            </VanDetailContainer>

            <VanBookingContainer>
              <form>
                <div>
                  <span>From ${vanProfile?.currentPrice} AUD per day</span>
                  <DatePicker>
                    <input type="text" name="begin" placeholder="From date" value=""/>
                    <input type="text" name="end" placeholder="To date" value=""/>
                    <Calendar date={date} setDate={setDate}/>
                  </DatePicker>
                </div>
              </form>
            </VanBookingContainer>
          </VanProfileContainer>{" "}
        </>
      )}
    </MainLayout>
  );
};

export default VanDetailPage;
