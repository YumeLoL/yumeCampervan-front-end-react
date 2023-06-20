import Button from '../../ui/atoms/Button';
import Banner from '../../ui/molecules/Banner';
import styled from 'styled-components';
import tw from 'twin.macro';

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
const StyleOption = styled.input`
  ${tw` 
  font-semibold
  text-sm
  md:text-base
  lg:text-lg
  mx-4 my-4
  `}
`;
const StyleInput = styled.input`
  ${tw` 
  font-semibold
  text-sm
  md:text-base
  lg:text-lg
  mx-4 my-4
  `}
`;

const SearchBar = styled.div`
  ${tw` 
  flex items-center justify-center
  `}
`;
const SearchBarInput = styled.input`
  ${tw` 
  px-4 py-2 my-8 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
  `}
`;

export {
  VansContainer,
  StyledBanner,
  FilterContainer,
  FilterItems,
  StyledButton,
  ItemContainer,
  DropdownBox,
  StyleOption,
  StyleInput,
  SearchBar,
  SearchBarInput,
};
