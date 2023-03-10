import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { getAllType, getCampervanPage, getVanType } from "../httpService/api/vanApi";

import { Marginer } from "../ui/atoms/Margin";
import Title from "../ui/atoms/Title";
import Text from "../ui/atoms/Text";
import Layout from "../ui/organisms/Layout";
import Button from "../ui/atoms/Button";
import Banner from "../ui/molecules/Banner";
import VanCard from "../ui/molecules/Card/VanCard";
import { IVan, IVanType } from "../libs/interface/van";
import useClickClose from "../hooks/useClickClose";
import { locationList } from "../libs/constant";


const CampervansPage = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // Usage of the hooks for the two ItemContainer components
    const { isOpen: locationIsOpen, setIsOpen: setLocationIsOpen, menuRef: locationRef } = useClickClose();
    const { isOpen: typeIsOpen, setIsOpen: setTypeIsOpen, menuRef: typeRef } = useClickClose();

    // query value setting
    const [vans, setVans] = useState<IVan[]>();
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 10,
    })
    const [berths, setBerths] = useState<number>(6);
    const [vanTypeList, setVanTypeList] = useState<IVanType[]>();
    const [vanType, setVanType] = useState<IVanType>({ vanTypeId: undefined, vanTypeName: undefined });
    const [selectedLocation, setSelectedLocation] = useState("All Location");
    const [queryParams, setQueryParams] = useState({
        berths,
        vanTypeId: vanType.vanTypeId,
        ...(selectedLocation && {selectedLocation})
    });


    // fetch data
    useEffect(() => {
        // fetch van list
        setLoading(true);
        let vanLocation;
        if (location.state) {
            // if queried location value passed from homepage search bar
            vanLocation = location.state.location;
        } else if (queryParams && queryParams.selectedLocation !== "all location") {
            // if location value be selected from filter box on campervan page
            vanLocation = queryParams.selectedLocation;
        } 

        getCampervanPage({ ...pagination, vanLocation, berths, vanTypeId: vanType.vanTypeId })
            .then((res) => {
                if (res.data.code === 1) {
                    setVans(res.data.data.records);
                }
            })
            .catch((err) => console.error("Request error:", err))
            .finally(() => {
                setLoading(false)
                location.state = undefined // to clear the value of vanLocation passed from location.state
            });


        // fetch van Type list
        getAllType()
            .then((res) => {
                if (res.data.code === 1) {
                    setVanTypeList(res.data.data);
                }
            })
            .catch((err) => console.error("Request error:", err))


    }, [queryParams])


    console.log(location.state)

    // render location list
    const renderLocationList = locationList
        .map((option: string, index: number) => (
            <StyleOption
                onClick={(e: any) => setSelectedLocation(e.target.value.toLowerCase())}
                key={index}
                value={option}
            >
                {option}
            </StyleOption>
        ))

    // render van type list   
    const renderVanTypeList = vanTypeList?.map((type) => (
        <StyleOption
            onClick={(e: any) => setVanType({ vanTypeName: type.vanTypeName, vanTypeId: e.target.value })}
            key={type.vanTypeId}
            value={type.vanTypeId}
        >
            {type.vanTypeName}
        </StyleOption>
    ))

    // render van list
    const renderedVanList = vans?.map((van) => {
        return <VanCard key={van.vanId} {...van} />
    })



    return (
        <Layout>
            <FilterContainer>
                <FilterItems>
                    {/* location selector */}
                    <ItemContainer ref={locationRef} className={"vanLocation"}>
                        <Button
                            onClick={() => setLocationIsOpen(!locationIsOpen)}
                            theme="filter"
                            text={""}
                        >
                            {selectedLocation}
                        </Button>
                        {locationIsOpen && <DropdownBox>{renderLocationList}</DropdownBox>}
                    </ItemContainer>

                    {/* guests(berths) number selector */}
                    <ItemContainer>
                        <Button theme="filter" text="">
                            <span onClick={() => setBerths(berths > 1 ? berths - 1 : 1)} style={{ "paddingRight": 7, "paddingLeft": 5 }} >-</span>
                            {` ${berths} Guests `}
                            <span onClick={() => setBerths(berths < 6 ? berths + 1 : 6)} style={{ "paddingRight": 5, "paddingLeft": 7 }}>+</span>
                        </Button>
                    </ItemContainer>

                    {/* vanType selector */}
                    <ItemContainer ref={typeRef} className={"vanType"}>
                        <Button
                            onClick={() => setTypeIsOpen(!typeIsOpen)}
                            theme="filter"
                            text={""}
                        >
                            {vanType.vanTypeName ? vanType.vanTypeName : "Van Type"}
                        </Button>
                        {typeIsOpen && <DropdownBox>{renderVanTypeList}</DropdownBox>}
                    </ItemContainer>

                    {/* query button */}
                    <StyledButton
                        className=""
                        text={"Search vans"}
                        theme={"outlined"}
                        onClick={() => {
                            console.log(selectedLocation, berths, vanType.vanTypeId)
                            setQueryParams({ selectedLocation, berths, vanTypeId: vanType.vanTypeId })
                        }}
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
                loading ? <h1>Loading.....</h1> : vans?.length ? <VansContainer>{renderedVanList}</VansContainer> : <h1 style={{ "color": "red" }}>Got Nothing...... Try other options......</h1>
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




const ItemContainer = styled.div`
  ${tw`
  flex 
  relative 
  items-baseline
  mr-5
  `}
`;
const DropdownBox = styled.div`
  ${tw`
  w-auto
  absolute 
  top-16
  left-0
  text-gray-700
  border-gray-300 
  bg-white
  border-2
  rounded-md
  text-xl
  z-10
  `}
`;
const StyleOption = styled.option`
  ${tw` 
  font-semibold
  text-sm
  md:text-base
  lg:text-lg
  mx-4 my-4
  `}
`;