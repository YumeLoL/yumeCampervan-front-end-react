import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import FilterBox from "../components/FilterBox";
import { Marginer } from "../ui/atoms/Margin";
import Title from "../ui/atoms/Title";
import Text from "../ui/atoms/Text";
import Layout from "../ui/organisms/Layout";
import Button from "../ui/atoms/Button";
import Banner from "../ui/molecules/Banner";




const CampervansPage = () => {
    const navigate = useNavigate();
    const { location } = useParams();

    // if there is passed location value then navigate to :location, otherwise showing whole list of campervan data
    //   const url = useMemo(() => {
    //     if (location) {
    //       return `${baseUrl}/vanProfile?location=${location}`;
    //     } else {
    //       return `${baseUrl}/vanProfile`;
    //     }
    //   }, [location]);

    // const { data, loading } = useFetch(null);

    const [selectedLocation, setSelectedLocation] = useState("");
    const [sleep, setSleep] = useState("");
    const [price, setPrice] = useState({ min: 1, max: 500 });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);


    return (
        <Layout>
            <FilterContainer>
                <FilterItems>
                    <FilterBox
                        className="location"
                        text={"All Location"}
                        optionCollection={[
                            "All Location",
                            "Melbourne",
                            "Adelaide",
                            "Sydney",
                        ]}
                        selectedValue={selectedLocation}
                        setSelectedValue={setSelectedLocation}
                    />

                    {/* <Calendar date={date} setDate={setDate} /> */}

                    <FilterBox
                        className="sleep"
                        text={sleep ? `${sleep}` : `Guests`}
                        optionCollection={[
                            `Guest 1`,
                            "Guests 2",
                            "Guests 3",
                            "Guests 4",
                            "Guests 5",
                            "Guests 6",
                        ]}
                        selectedValue={sleep}
                        setSelectedValue={setSleep}
                    />

                    {/* <PriceRange price={price} setPrice={setPrice} /> */}

                    <StyledButton
                        className=""
                        text={"Search vans"}
                        theme={"outlined"}
                    // onClick={onClick}
                    />
                </FilterItems>
            </FilterContainer>

            <Marginer direction="vertical" margin="5em" />

            <div className="max-w-screen-2xl px-10 text-center">
                <Title title={"Looking for a van ?"} size={"large"} />
                <Text
                    text={
                        "Here's some of our favourites for Melbourne, Tasmania, and Sydney. If you can’t find something below go to view all vans and find the perfect caravan or motorhome for your holiday."
                    }
                />
            </div>

            <VansContainer>
                
                {/* {loading
                    ? "Loading please wait"
                    : data?.map((van: any) => { 
                          return (
                        <CarCard
                          key={van.id}
                          name={van.name}
                          vanType={van.vanType}
                          sleep={van.sleep}
                          location={van.location}
                          currentPrice={van.currentPrice}
                          thumbnailSrc={van.thumbnailSrc}
                          onClick={() => navigate(`/campervans/van/${van.id}`)}
                        />
                          );
                    })} */}
            </VansContainer>
            <Button text={"Show more"} theme={"filled"} />
            <StyledBanner
                text={"View all vans"}
                theme={"outlined"}
                title={"Can't find what you're looking for?"}
                size={"large"}
            />
        </Layout>
    );
};

export default CampervansPage;


const VansContainer = styled.div`
  ${tw` 
  max-w-screen-2xl
  flex 
  flex-wrap 
  align-middle 
  justify-center
  my-8
  `}
`;
const StyledBanner = styled(Banner)`
  ${tw` 
    bg-transparent 
  `}
`;

const FilterContainer = styled.div`
  ${tw`
    w-full
    h-auto
    flex
    flex-wrap
    justify-start
    px-2 py-2
    border-t-[1px]
    border-b-[1px]
    border-gray-300
    z-40
  `}
`;
const FilterItems = styled.div`
  ${tw`
    w-full
    max-w-screen-2xl
    h-auto
    m-auto
    flex
    items-center
  `}
`;
const StyledButton = styled(Button)`
  ${tw`mb-0`}
`;

function useFetch(url: any): { data: any; loading: any; } {
    throw new Error("Function not implemented.");
}
