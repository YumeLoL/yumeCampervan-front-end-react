import React from "react";

interface TitleType {
  title: string;
}

const LargeTitle = ({ title }: TitleType) => {
  return (
    <h1
      className=" 
      text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal"
    >
      {title}
    </h1>
  );
};

export default LargeTitle;
