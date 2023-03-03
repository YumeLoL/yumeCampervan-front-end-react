import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { IPost } from "../../../../libs/interface";
import Button from "../../../atoms/Button";
import Title from "../../../atoms/Title";

interface Props {
  loading: boolean;
  data: IPost[];
}

const CardWrapper = styled.div`
  ${tw` 
  max-w-screen-2xl
  grid 
  grid-cols-1 md:grid-cols-2 xl:grid-cols-4
  gap-8 lg:gap-4
  justify-center
  `}
`;
const Card = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    relative
    max-w-[17em]
    h-[430px]
    w-full
    flex
    flex-col
    rounded-md
    m-1
    md:m-2
    cursor-pointer
    overflow-hidden
    transition-transform
  `};

  :hover {
    transform: scale(1.02);
  }
  :hover Button{
    ${tw`  
    bg-primary
    text-white
    border-transparent
    `}
  }
`;
const ImgContainer = styled.div`
  ${tw`
  w-full  
  h-[160px]
  object-cover
  `}
`;
const Image = styled.img`
  ${tw` 
  w-full
  h-full
  `}
`;
const ContentWrapper = styled.div`
  ${tw`
  w-full
  h-[60%]
  flex
  flex-col
  justify-around
  p-4
  `}
`;
const StyledTitle = styled(Title)`
  ${tw`break-normal mb-0 `}
`;
const StyledSpan = styled.span`
  ${tw`
  text-red-600
  text-base
  md:text-xl
  font-bold
  `}
`;
const HighlightsWrapper = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    justify-start
  `};
`;
const StyledButton = styled(Button)`
  ${tw`
  m-0
  w-[88%]
  absolute
  bottom-2
  `}
`;

const PostCard = ({ loading, data }: Props) => {
  return (
    <CardWrapper>
      {loading
        ? "loading ........"
        : data?.map((highlight) => {
            return (
              <Card key={highlight.id}>
                <Link to={`/get-inspired/popular-routes/${highlight.id}`}>
                  <ImgContainer>
                    <Image src={highlight.img} alt="pic" />
                  </ImgContainer>

                  <ContentWrapper>
                    <StyledTitle title={highlight.title} size={"small"} />

                    <StyledSpan>{highlight.durations}</StyledSpan>

                    <HighlightsWrapper>
                      <div className=" grid grid-cols-2 gap-2">
                        {highlight.highlights.map((obj: string, i: number) => (
                          <span className="text-sm" key={i}>{obj}</span>
                        ))}
                      </div>
                    </HighlightsWrapper>

                    <StyledButton theme={"outlined"} text={"Read more <<"} />
                  </ContentWrapper>
                </Link>
              </Card>
            );
          })}
    </CardWrapper>
  );
};

export default PostCard;
