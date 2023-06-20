import styled from "styled-components";

import React from "react";

interface Image {
  src: string;
  direction: "left" | "right";
}

const ImageSeparator = ({ src, direction }: Image) => {
  if (direction === "left") return <img src={src} alt="" />;
  else return <ImageRight src={src} alt="" />;
};

export default ImageSeparator;

const ImageRight = styled.img`
  transform: rotateY(180deg);
`;
