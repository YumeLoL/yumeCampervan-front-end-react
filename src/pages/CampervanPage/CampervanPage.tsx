import useClickClose from '../../hooks/useClickClose';
import { getAllType, getCampervanPage, getVanType } from '../../httpService/api/vanApi';
import { LocationList } from '../../libs/constant';
import { type IVan, type IVanType } from '../../libs/interface/van';
import Button from '../../ui/atoms/Button';
import { Marginer } from '../../ui/atoms/Margin';
import Text from '../../ui/atoms/Text';
import Title from '../../ui/atoms/Title';
import VanCard from '../../ui/molecules/Card/VanCard';
import Layout from '../../ui/organisms/Layout';
import { capitalizedSentence } from '../../utils/capitalizeUtil';
import {
  DropdownBox,
  FilterContainer,
  FilterItems,
  ItemContainer,
  StyleInput,
  StyleOption,
  StyledBanner,
  StyledButton,
  VansContainer,
  SearchBar,
  SearchBarInput,
} from './campervanPage.styled';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';

const CampervansPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const {
    isOpen: locationIsOpen,
    setIsOpen: setLocationIsOpen,
    menuRef: locationRef,
  } = useClickClose();
  const { isOpen: typeIsOpen, setIsOpen: setTypeIsOpen, menuRef: typeRef } = useClickClose();

  const [vanTypeList, setVanTypeList] = useState<IVanType[]>();
  const [vanType, setVanType] = useState<IVanType>({
    vanTypeId: undefined,
    vanTypeName: undefined,
  });
  const [buttonValue, setButtonValue] = useState(
    location.state ? location.state.location : 'location',
  );

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const [vans, setVans] = useState<IVan[]>();
  const [vanName, setVanName] = useState<string>('');
  const [berths, setBerths] = useState<number>(6);
  const [queryParams, setQueryParams] = useState({
    berths,
    vanTypeId: vanType.vanTypeId,
    vanLocation: buttonValue,
    vanName: '',
  });

  const debouncedQuery = useDebounce(vanName, 2000);

  // fetch van list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCampervanPage({
          ...pagination,
          vanLocation: buttonValue === 'location' ? '' : buttonValue,
          berths,
          vanTypeId: vanType.vanTypeId,
          vanName: debouncedQuery ? debouncedQuery : '',
        });
        if (res.data.code === 1) {
          setVans(res.data.data.records);
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    };

    fetchData();
  }, [pagination, queryParams, debouncedQuery]);

  // fetch van type
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllType();
        if (res.data.code === 1) {
          setVanTypeList(res.data.data);
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    };
    fetchData();
  }, []);

  const renderLocationList = useMemo(() => {
    return Object.values(LocationList).map((option: string, index: number) => (
      <StyleInput
        onClick={() => {
          setButtonValue(option);
        }}
        key={index}
        type="button"
        value={capitalizedSentence(option)}
      />
    ));
  }, []);

  const renderVanTypeList = useMemo(() => {
    return vanTypeList?.map((type) => (
      <StyleInput
        onClick={() => {
          setVanType({
            vanTypeId: type.vanTypeId,
            vanTypeName: type.vanTypeName,
          });
        }}
        key={type.vanTypeId}
        value={type.vanTypeName}
        type="button"
      />
    ));
  }, [vanTypeList]);

  const renderedVanList = useMemo(() => {
    return vans?.map((van) => {
      return <VanCard key={van.vanId} {...van} />;
    });
  }, [vans]);

  return (
    <Layout>
      <FilterContainer>
        <FilterItems>
          {/* location selector */}
          <ItemContainer ref={locationRef} className={'vanLocation'}>
            <Button
              onClick={() => {
                setLocationIsOpen(!locationIsOpen);
              }}
              theme="filter"
              text={''}
            >
              {capitalizedSentence(buttonValue)}
            </Button>
            {locationIsOpen && <DropdownBox>{renderLocationList}</DropdownBox>}
          </ItemContainer>

          {/* guests(berths) number selector */}
          <ItemContainer>
            <Button theme="filter" text="">
              <span
                onClick={() => {
                  setBerths(berths > 1 ? berths - 1 : 1);
                }}
                style={{ paddingRight: 7, paddingLeft: 5 }}
              >
                -
              </span>
              {` ${berths} Guests `}
              <span
                onClick={() => {
                  setBerths(berths < 6 ? berths + 1 : 6);
                }}
                style={{ paddingRight: 5, paddingLeft: 7 }}
              >
                +
              </span>
            </Button>
          </ItemContainer>

          {/* vanType selector */}
          <ItemContainer ref={typeRef} className={'vanType'}>
            <Button
              onClick={() => {
                setTypeIsOpen(!typeIsOpen);
              }}
              theme="filter"
              text={''}
            >
              {vanType.vanTypeName ? vanType.vanTypeName : 'Van Type'}
            </Button>
            {typeIsOpen && <DropdownBox>{renderVanTypeList}</DropdownBox>}
          </ItemContainer>

          {/* query button */}
          <StyledButton
            className=""
            text={'Search vans'}
            theme={'outlined'}
            onClick={() => {
              setQueryParams({
                vanLocation: buttonValue,
                berths,
                vanTypeId: vanType.vanTypeId,
                vanName: '',
              });
            }}
          />
        </FilterItems>
      </FilterContainer>

      <Marginer direction="vertical" margin="5em" />

      <div className="max-w-screen-2xl px-10 text-center">
        <Title title={'Looking for a van ?'} size={'large'} />
        <SearchBar>
          <SearchBarInput
            type="text"
            placeholder="Search for van"
            onChange={(e: any) => {
              setVanName(e.target.value);
            }}
          />
        </SearchBar>
        <Text
          text={
            "Here's some of our favourites for Melbourne, Tasmania, and Sydney. If you can’t find something below go to view all vans and find the perfect caravan or motorhome for your holiday."
          }
        />
      </div>

      {/* render van list here */}
      {loading ? (
        <h1>Loading.....</h1>
      ) : vans?.length ? (
        <VansContainer>{renderedVanList}</VansContainer>
      ) : (
        <h1 style={{ color: 'red' }}>Got Nothing...... Try other options......</h1>
      )}

      <Button text={'Show more'} theme={'filled'} />
      <StyledBanner
        text={'View all vans'}
        theme={'outlined'}
        title={"Can't find what you're looking for?"}
        size={'large'}
      />
    </Layout>
  );
};

export default CampervansPage;
