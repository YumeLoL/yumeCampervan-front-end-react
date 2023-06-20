import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PictureList } from "../../components/PictureList";
import { RequestBox } from "../../components/RequestBox";
import { getVanById } from "../../httpService/api/vanApi";
import { IVan } from "../../libs/interface/van";
import Text from "../../ui/atoms/Text";
import Title from "../../ui/atoms/Title";
import Layout from "../../ui/organisms/Layout";
import {
  Avatar,
  AvatarIcon,
  CarouselContainer,
  FeaturedList,
  InfoSession,
  VanBookingContainer,
  VanDetailContainer,
  VanProfileContainer,
  VanTitleAvatar,
} from "./vanDetailPage.styled";

const VanDetailPage = () => {
  const { vanId } = useParams();
  if (!vanId) {
    // Render an error message or fallback UI if the van data is not available
    return <div>Sorry, we couldn't find a van with ID {vanId}.</div>;
  }

  const [loading, setLoading] = useState(false);
  const [van, setVan] = useState<IVan>();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await getVanById(vanId);
        if (res.data.code === 1) {
          setVan(res.data.data);
        }
        setLoading(false);
      } catch (err) {
        console.error("Request error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {loading
        ? "on loading ......"
        : van && (
            <>
              <CarouselContainer>
                {van.vanImg ? (
                  <img
                    src={van.vanImg[0]}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src={
                      "https://d38b8me95wjkbc.cloudfront.net/assets/fallback/default-f339cd00658ef86db5dbd0afc674f221b70f6090c0971a0a0f930a16c1a91a45.jpg"
                    }
                    alt="Phone coming soon"
                  />
                )}

                {/* <ImgCarousel imgUrl={van?.vanImg}/> */}
              </CarouselContainer>
              <VanProfileContainer>
                <VanDetailContainer>
                  <VanTitleAvatar>
                    <Title
                      className="text-secondary flex items-center"
                      size={"large"}
                      title={van.vanName}
                    />
                  </VanTitleAvatar>

                  <strong className="text-3xl inline-block my-4">
                    location: {van.vanLocation}
                  </strong>

                  <InfoSession>
                    <strong>sleep: {van.berths}</strong>
                    <strong>Van Type: {van.vanTypeName}</strong>
                  </InfoSession>

                  <Text text={van.vanDescription as string} />

                  <hr />
                  <PictureList imgUrl={van.vanImg} />
                </VanDetailContainer>

                <VanBookingContainer>
                  <RequestBox price={van.vanPricePerDay} vanId={vanId} />
                </VanBookingContainer>
              </VanProfileContainer>{" "}
            </>
          )}
    </Layout>
  );
};

export default VanDetailPage;
