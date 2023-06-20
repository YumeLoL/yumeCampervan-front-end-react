import FAQs from '../../components/FAQs';
import SearchByLocation from '../../components/SearchByLocation';
import blob from '../../libs/img/blob.svg';
import blueVan from '../../libs/img/blue-camper-van.png';
import deliverBush from '../../libs/img/deliver-caravan-bush.svg';
import driveVan from '../../libs/img/drive-all-van.svg';
import orangeVan from '../../libs/img/orange-camper-van.png';
import ImageSeparator from '../../ui/atoms/ImageSeparator';
import { Marginer } from '../../ui/atoms/Margin';
import Text from '../../ui/atoms/Text';
import Title from '../../ui/atoms/Title';
import Layout from '../../ui/organisms/Layout';
import {
  AboutUsContainer,
  BlobContainer,
  BookStepContainer,
  CarContainer,
  HeroContainer,
  InfoContainer,
  LeftContainer,
  RightContainer,
  SearchContainer,
  StandaloneCar,
  Step,
  StepContainer,
  StepIcon,
  StepTitle,
  StepsContainer,
  TopMain,
} from './home.styled';
import { faCalendarAlt, faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
  return (
    <Layout>
      <HeroContainer>
        <TopMain>
          <LeftContainer>
            <Title title={'Rent The Best Car Lorem ipsum dolor sit amet.'} size={'large'} />
            <Text
              text={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem, sint dicta sequi ratione facere ipsum fugiat qui, impedit molestias, doloremque soluta at. Minus labore a aut hic nisi, autem laudantium voluptas ratione corporis ipsam.'
              }
            />
          </LeftContainer>

          <RightContainer>
            <BlobContainer>
              <img src={blob} alt="blobImg" />
            </BlobContainer>
            <StandaloneCar>
              <img src={blueVan} alt="blueCampervan" />
            </StandaloneCar>
          </RightContainer>
        </TopMain>

        <SearchContainer>
          <SearchByLocation />
        </SearchContainer>
      </HeroContainer>

      <Marginer direction="vertical" margin="10em" />
      {/* <CarsCarousel /> */}

      <ImageSeparator src={driveVan} direction={'left'} />
      <Marginer direction="vertical" margin="8em" />

      <AboutUsContainer>
        <CarContainer>
          <img src={orangeVan} alt="" />
        </CarContainer>
        <InfoContainer>
          <Title title="Feel The Best Experience With Our Rental Deals" size={'large'} />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
        </InfoContainer>
      </AboutUsContainer>

      <Marginer direction="vertical" margin="8em" />
      <ImageSeparator src={deliverBush} direction={'right'} />

      <BookStepContainer>
        <Title title="Our Booking Steps" size={'large'} />
        <StepsContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </StepIcon>
            </Step>
            <StepTitle>Choose Location</StepTitle>
            <Text text=" Find the nearest Yourcar point and book your car. Lorem ipsum dolor sit amet." />
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </StepIcon>
            </Step>
            <StepTitle>Pick-Up Date</StepTitle>
            <Text text="Pickup the Best Date to rent a car for you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid." />
          </StepContainer>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faCarSide} />
              </StepIcon>
            </Step>
            <StepTitle>Book Your Car</StepTitle>
            <Text text=" Book your nice car with ease in one single click. Lorem ipsum dolor sit amet." />
          </StepContainer>
        </StepsContainer>
      </BookStepContainer>

      <FAQs />
    </Layout>
  );
};

export default HomePage;
