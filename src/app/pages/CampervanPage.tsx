import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { getCampervanPage, getVanType, IQueryVan } from "../httpService/api/vanApi";

import FilterBox from "../components/FilterBox";
import { Marginer } from "../ui/atoms/Margin";
import Title from "../ui/atoms/Title";
import Text from "../ui/atoms/Text";
import Layout from "../ui/organisms/Layout";
import Button from "../ui/atoms/Button";
import Banner from "../ui/molecules/Banner";
import VanCard from "../ui/molecules/Card/VanCard";
import { IVan } from "../libs/interface/van";




const CampervansPage = () => {
    const navigate = useNavigate();
    const { vanLocation } = useParams();
    const [selectedLocation, setSelectedLocation] = useState("");
    const [price, setPrice] = useState({ min: 1, max: 500 });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 10,
    })
    const [vans, setVans] = useState<IVan[]>();
    const [berths, setBerths] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);

        getCampervanPage({ ...pagination, vanLocation, berths })
            .then((res) => {
                if (res.data.code === 1) {
                    //console.log(res.data.data.records)
                    setVans(res.data.data.records)
                }            
            })
            .catch((err) => err.message("Request error:", err))
            .finally(() => setLoading(false));

    }, [])

    // render van list
    const renderedVanList = vans?.map((van) => {
        return <VanCard key={van.vanId} {...van} />
    })

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
                        className="berths"
                        text={berths ? `${berths}` : `Guests`}
                        optionCollection={[
                            `Guest 1`,
                            "Guests 2",
                            "Guests 3",
                            "Guests 4",
                            "Guests 5",
                            "Guests 6",
                        ]}
                        selectedValue={berths || null}
                        setSelectedValue={setBerths}
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

            {/* render van list here */}
            {
                loading
                    ? <h1>Loading.....</h1>
                    : <VansContainer>{renderedVanList}</VansContainer>
            }

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
  max-w-screen-xl
  flex 
  flex-wrap 
  align-middle 
  justify-center
  my-8 mx-8
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
